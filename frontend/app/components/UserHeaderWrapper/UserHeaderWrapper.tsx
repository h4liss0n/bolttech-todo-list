"use client"
import { useContext } from 'react'

import { useRouter } from 'next/navigation'
import { UseApplicationContext } from '../../context/AuthContext'
import UserHeader from './fragment/UserHeader'


export const UserHeaderWrapper = () => {
    const { name, isLoggedIn, actionLogout } = useContext(UseApplicationContext)
    const router = useRouter()

    const handleLogin = () => {
        router.push("/login")
    }

    const handleRegister = () => {
        router.push("/register")
    }

    const handleLogout = () => {
        actionLogout()
        router.push("/")
    }


    return (
        <UserHeader user={{ name }} isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} onRegister={handleRegister} />
    )
}
