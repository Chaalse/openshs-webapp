import { createContext, FC, useState } from "react";
import { getAuth, User } from "firebase/auth";
import IAuthenticationRepository from "../../api/interfaces/IAuthenticationRepository";
import ApiAuthenticationRepository from "../../api/ApiAuthenticationRepository";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Constantes } from "../constants/Constantes";

interface AuthContextProps {
    user: User | null,
    button: {text: string, onClick: () => void}
    createAccount: (email: string, password: string) => void,
    signIn: (email: string, password: string) =>  void,
    signOut: () => void
}


const defaultValue = {
    user: null,
    button: {} as {text: string, onClick: () => void},
    createAccount: (email: string, password: string) => { },
    signIn: (email: string, password: string) => null,
    signOut: () => null
}

export const AuthContext = createContext<AuthContextProps>(defaultValue);

export const AuthContextProvider: FC<{}> = ({ children }) => {

    const navigate = useNavigate();
    
    const [button, setButton] = useState({text: 'LOG IN', onClick: () => navigate(Constantes.LOGIN_PATH)});

    const [user, setUser] = useState<User | null>(defaultValue.user);

    const auth = getAuth();

    const authRepo: IAuthenticationRepository = new ApiAuthenticationRepository();

    const createAccount = (email: string, password: string) => {
        authRepo.createAccount(auth, email, password)
            .then((response) => {
                if (response.success) {
                    setUser(response.data);
                    setButton({text: 'LOG OUT', onClick: signOut });
                    toast.success('Account created succesfully!');
                    return;
                }
                toast.error(`There was an error: [${response.errorCode}]${response.errorMessage}`);
                return;
            })
    }

    const signIn = (email: string, password: string) => {
        authRepo.signIn(auth, email, password)
            .then((response) => {
                console.log(response)
                if (response.success) {
                    setUser(response.data);
                    setButton({text: 'LOG OUT', onClick: signOut });
                    toast.success('Signed in successfully');
                    return;
                }
                toast.error(`There was an error: [${response.errorCode}]${response.errorMessage}`);
                return;
            })
        }
        
        const signOut = () => {
            authRepo.signOut(auth)
            .then((response) => {
                if (response.success) {
                    setUser(null);
                    setButton({text: 'LOG IN', onClick: () => navigate(Constantes.LOGIN_PATH)})
                    toast.success('Signed out successfully');
                    return;
                }
                toast.error(`There was an error: [${response.errorCode}]${response.errorMessage}`);
                return;
            })
    }

    const initialValue = {
        user: user,
        button: button,
        createAccount: createAccount,
        signIn: signIn,
        signOut: signOut
    }

    return (
        <AuthContext.Provider value={initialValue}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    )
}