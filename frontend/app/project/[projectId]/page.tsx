"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { ProjectServiceApi } from '@/app/service/ProjectService';
import { GetStaticPropsContext } from 'next';
import { ProjectCard } from '@/app/model/ProjectModel';




interface ProjectFormProps {
    params: {
        projectId: string
    }
    onSave: (updatedProject: ProjectCard) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ params: { projectId }, onSave }) => {
    const [updatedProject, setUpdatedProject] = useState<ProjectCard>({
        id: 0,
        name: "",
        users: [],
        tasks: []
    });



    const getData = useCallback(async () => {
        const data = await ProjectServiceApi.getById(projectId)
        setUpdatedProject(data)
    }, [projectId])

    useEffect(() => {
        getData()
    }, [getData])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedProject({
            ...updatedProject,
            name: e.target.value,
        });
    };

    const handleUserChange = (index: number, field: string, value: string) => {
        const updatedUsers = [...updatedProject.users];
        updatedUsers[index] = {
            ...updatedUsers[index],
            [field]: value,
        };
        setUpdatedProject({
            ...updatedProject,
            users: updatedUsers,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSave(updatedProject);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Project Name:
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={updatedProject.name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Users:
                </label>
                {updatedProject.users.map((user, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={user.name}
                            onChange={(e) => handleUserChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={user.id}
                            onChange={(e) => handleUserChange(index, 'user', e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save
            </button>
        </form>
    );
};





export default ProjectForm;
