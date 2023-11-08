export interface User extends UserBase {
    id: number;
}

export interface UserBase {
    name: string;
    user: string;
    password: string;
}
