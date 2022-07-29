import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import RepositoryResponse from "../models/RepositoryResponse";
import IAuthenticationRepository from "./interfaces/IAuthenticationRepository";




export default class ApiAuthenticationRepository implements IAuthenticationRepository {

    createAccount(auth: Auth, email: string, password: string): Promise<RepositoryResponse<User | null>> {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    resolve({
                        data: user,
                        success: true,
                        errorCode: 0,
                        errorMessage: ''
                    })
                })
                .catch((error) => {
                    resolve({
                        data: null,
                        success: false,
                        errorCode: error.code,
                        errorMessage: error.message
                    })
                })
        })
    }

    signIn(auth: Auth, email: string, password: string): Promise<RepositoryResponse<User | null>> {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    resolve({
                        data: user,
                        success: true,
                        errorCode: 0,
                        errorMessage: ''
                    })
                }).catch((error) => {
                    resolve({
                        data: null,
                        success: false,
                        errorCode: error.code,
                        errorMessage: error.message
                    })
                })
        })
    }

    signOut(auth: Auth): Promise<RepositoryResponse<null>> {
        return new Promise((resolve, reject) => {
            signOut(auth)
                .then(() => {
                    resolve({
                        data: null,
                        success: true,
                        errorCode: 0,
                        errorMessage: ''
                    })
                }).catch((error) => {
                    resolve({
                        data: null,
                        success: false,
                        errorCode: error.code,
                        errorMessage: error.message
                    })
                })
        })
    }

}