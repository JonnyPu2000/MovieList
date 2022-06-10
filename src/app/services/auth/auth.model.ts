export interface IAuthResponse {
    code: number,
    token: string,
    user: IUser,
    error?: string
}

export interface IUser {
    username: string,
    email: string,
}