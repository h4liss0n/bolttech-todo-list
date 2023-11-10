"use client"
import React from 'react';
import Image from 'next/image'
import Avatar from "../../../avatar-icon.png"

interface UserHeaderProps {
    user: {
        name: string;
    };
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
    onRegister: () => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user, isLoggedIn, onLogin, onLogout, onRegister }) => {
    return (
        <div className="bg-blue-500 py-4 text-white flex justify-between items-center p-10 mb-10">
            <div>
                {/* <Image src={Avatar} alt={`${user.name}'s avatar`} className="w-16 h-16 rounded-full" /> */}
                <h1 className="text-2xl font-bold mt-2">{user.name}</h1>
            </div>
            <div>
                {isLoggedIn ? (
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={onLogout}>
                        Logout
                    </button>
                ) : (
                    <div className="flex justify-between items-center p-10">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={onLogin}>
                            Login
                        </button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onRegister}>
                            Register
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserHeader;

