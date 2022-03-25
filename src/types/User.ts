export type User = {
    _id?: string
    name: string
    username?: string
    password?: string
    role: 'VIEWER' | 'EDITOR' | 'ADMIN'
}

export type FormLoginUser = {
    username: string
    password: string
}
