"use client"
import { ReactNode, createContext, useState } from "react"
import jwt from 'jsonwebtoken';

export interface ApplicationContextType {
    name: string
    isLoggedIn: boolean
    token: string
    actionLogin: (token: string) => void
    actionLogout: () => void
}

const initialState: ApplicationContextType = {
    name: "",
    isLoggedIn: false,
    token: "",
    actionLogin: (token) => { },
    actionLogout: () => { }
}


export const UseApplicationContext = createContext<ApplicationContextType>(initialState)


interface Props {
    children: ReactNode;
}


export const ApplicationContextProvider: React.FC<Props> = ({ children }) => {
    const [state, setState] = useState<ApplicationContextType>(initialState)

    const setName = (value: string) => {
        setState((prev) => ({ ...prev, name: value }))
    }

    const actionLogin = (token: string) => {
        const decode = jwt.decode(token)
        if (typeof decode === "object" && decode) {
            localStorage.setItem("token", token);
            const name = decode["username"]
            setState((prev) => ({ ...prev, name: name, token: token, isLoggedIn: true }))
        }
    }

    const actionLogout = () => {
        localStorage.setItem("token", "");
        setState(initialState)
    }

    return (
        <>
            <UseApplicationContext.Provider value={
                {
                    name: state.name,
                    isLoggedIn: state.isLoggedIn,
                    actionLogin: actionLogin,
                    actionLogout: actionLogout,
                    token: state.token
                }}>
                {children}
            </UseApplicationContext.Provider>
        </>
    )
}

