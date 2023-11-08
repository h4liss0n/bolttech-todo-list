"use client"

import { ProjectServiceApi } from '@/app/service/ProjectService';
import React, { useState } from 'react';
import { ProjectBase } from "../../model/ProjectModel";
import { useRouter } from 'next/navigation';


const FormComponent: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        projectName: '',
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

        const project: ProjectBase = {
            name: formData.projectName
        }
        await ProjectServiceApi.createProject(project)

        router.push("/")

    };

    const handleCancel = () => {
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md max-w-xs mx-auto">
            <div className="mb-4">
                <label htmlFor="projectName" className="block text-gray-700 font-medium mb-2">
                    Project name
                </label>
                <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    value={formData.projectName}
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


