"use client"
import { ReactNode, createContext, useCallback, useState } from "react"
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

    const hydratedFormToken = (token: string) => {
        const decode = jwt.decode(token)
        if (typeof decode === "object" && decode) {
            const name = decode["username"]
            return {
                name: name,
                token: token,
                isLoggedIn: true
            }
        }
    }


    const [state, setState] = useState<ApplicationContextType>(initialState)

    const actionLogin = useCallback((token: string) => {
        localStorage.setItem("token", token)
        const tokenInfo = hydratedFormToken(token)
        if (tokenInfo) {
            setState((prev) => ({
                ...prev,
                name: tokenInfo.name,
                token: tokenInfo.token,
                isLoggedIn: true
            }))
        }
    }, [setState])

    const actionLogout = useCallback(() => {
        localStorage.removeItem("token")
        setState(initialState)
    }, [setState])

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

