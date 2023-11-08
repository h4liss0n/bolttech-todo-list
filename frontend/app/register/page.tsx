"use client"

import { ProjectServiceApi } from '@/app/service/ProjectService';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserBase } from '../model/UserModel';
import { UserServiceApi } from '../service/UserServiceApi';



const FormComponent: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        user: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user: UserBase = {
            name: formData.name,
            user: formData.user,
            password: formData.password,

        }
        await UserServiceApi.create(user)
        router.push("/")
    };

    const handleCancel = () => {
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md max-w-xs mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    User name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="user" className="block text-gray-700 font-medium mb-2">
                    User
                </label>
                <input
                    type="text"
                    name="user"
                    id="user"
                    value={formData.user}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>


            <div className="flex justify-center space-x-2">
                <button type="button" className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={handleCancel}>
                    Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default FormComponent;


