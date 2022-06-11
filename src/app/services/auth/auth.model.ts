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

export interface ISignUp {
    username: string,
    email: string,
    password: string,
    confirmPassword?: string
}