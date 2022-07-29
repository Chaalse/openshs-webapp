import { Auth, User } from "firebase/auth";
import RepositoryResponse from "../../models/RepositoryResponse";





export default interface IAuthenticationRepository {

    createAccount(auth: Auth, email: string, password: string): Promise<RepositoryResponse<User | null>>

    signIn(auth: Auth, email: string, password: string): Promise<RepositoryResponse<User | null>>

    signOut(auth: Auth): Promise<RepositoryResponse<null>>

}