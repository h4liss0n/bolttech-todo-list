"use client"

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardTask, ProjectCardUser } from '@/app/model/ProjectModel';


export interface ProjectCard {
    id: number
    name: string
    tasks: ProjectCardTask[]
    users: ProjectCardUser[]
    onDelete: (id: number) => void
    onEdit: (id: number) => void
}

export const CardProject: React.FC<ProjectCard> = ({ id, name, tasks, users, onDelete, onEdit }) => {

    const handleDelete = () => {
        onDelete(id)
    }

    const handleEdit = () => {
        onEdit(id)
    }

    return (
        <div className={'project-card bg-white p-4 rounded-md shadow-sm'}>
            <div className="bg-blue-400 p-2.5 flex">
                <div className="flex-grow">
                    <h2 className="text-white basis-3">{name}</h2>
                </div>
                <div>
                    <button type="button" className='m-1'>
                        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
                    </button>
                    <button type="button">
                        <FontAwesomeIcon icon={faEdit} onClick={handleEdit} />
                    </button>
                </div>

            </div>
            <ul className="p-4">
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <div className="flex items-center">
                            <div className="flex-grow">
                                <span className="task-description">{task.description}</span>
                            </div>
                            <div className="flex-shrink-0">
                                <input type="checkbox" checked={task.done} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="p-4">
                {users.map((user) => (
                    <div key={user.id} className="flex items-center">
                        <span className="assignee-item">{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


