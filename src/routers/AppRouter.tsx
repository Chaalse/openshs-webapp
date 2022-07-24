import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../home/HomeScreen";
import { LoginScreen } from "../login/LoginScreen";
import { RecoverPassScreen } from "../login/recover/RecoverPassScreen";
import { SigninFormScreen } from "../login/signin/SigninFormScreen";
import NavBar from "../shared/components/NavBar/NavBar";
import { SimulatorScreen } from "../simulator/SimulatorScreen";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/simulator" element={<SimulatorScreen />} />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/changepassword" element={<RecoverPassScreen/>} />
                <Route path="/signin" element={<SigninFormScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;