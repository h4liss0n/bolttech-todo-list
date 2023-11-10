"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { ProjectServiceApi } from '@/app/service/ProjectService';
import { ProjectCard } from '@/app/model/ProjectModel';
import { useRouter } from 'next/navigation';
import { TaskModelPost } from '@/app/model/TaskModel';
import { TaskService } from '@/app/service/TaskService';

interface ProjectFormProps {
    params: {
        projectId: string
    }
}

const ProjectForm: React.FC<ProjectFormProps> = ({ params: { projectId } }) => {
    const [updatedProject, setUpdatedProject] = useState<ProjectCard>({
        id: "",
        name: "",
        users: [],
        tasks: []
    });
    const router = useRouter()
    const [formData, setFormData] = useState({
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getData = useCallback(async () => {
        const data = await ProjectServiceApi.getById(projectId)
        setUpdatedProject(data)
    }, [projectId])

    useEffect(() => {
        getData()
    }, [getData])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const body: TaskModelPost = {
            projectId: projectId,
            description: formData.description,
        }
        const result = await TaskService.create(body)
        if (result) {
            router.back()
        }
    };

    const handleCancel = () => {
        router.back()
    }

    const handleUpdateTask = async (taskId: string, status: boolean) => {
        await TaskService.updateStatus(taskId, status)
        getData()
    }

    return (

        <div className="bg-white shadow-md rounded-md mx-auto max-w-sm mx-auto p-4">
            <h1 className='block text-gray-900 text-lg font-bold mb-3'>
                Add Task into the project
            </h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                    Name: {updatedProject.name}
                </label>
            </div>


            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                        Task description
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
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

        </div >
    );
};





export default ProjectForm;
