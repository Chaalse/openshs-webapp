


export default interface RepositoryResponse<T> {
    success: boolean,
    errorCode: number,
    errorMessage: string,
    data: T
}