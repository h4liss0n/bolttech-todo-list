"use client"

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardTask, ProjectCardUser } from '@/app/model/ProjectModel';
import TasksGroup from './fragment/TasksGroup';


export interface ProjectCard {
    id: string
    name: string
    tasks: ProjectCardTask[]
    users: ProjectCardUser[]
    onDelete: (id: string) => void
    onEdit: (id: string) => void
    onAdd: (id: string) => void
    onUpdateTaskState: (taskId: string, status: boolean) => void
}

export const CardProject: React.FC<ProjectCard> = ({ id, name, tasks, users, onDelete, onEdit, onAdd, onUpdateTaskState }) => {

    const handleDelete = () => {
        onDelete(id)
    }

    const handleEdit = () => {
        onEdit(id)
    }

    const handleAddTask = () => {
        onAdd(id)
    }

    const handleUpdateTaskState = (taskId: string, status: boolean) => {
        onUpdateTaskState(taskId, status)
    }

    return (
        <div className={'project-card bg-white p-4 rounded-md shadow-sm'}>
            <div className="bg-blue-400 p-2.5 flex">
                <div className="flex-grow">
                    <h2 className="text-white basis-3">{name}</h2>
                </div>
                <div className='flex gap-2'>
                    <button type="button" className='m-1'>
                        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} className='text-blue-50' />
                    </button>
                    <button type="button">
                        <FontAwesomeIcon icon={faEdit} onClick={handleEdit} className='text-blue-50' />
                    </button>

                    <button type="button">
                        <FontAwesomeIcon icon={faPlus} onClick={handleAddTask} className='text-blue-50' />
                    </button>
                </div>

            </div>
            <TasksGroup tasks={tasks} onUpdateTaskState={handleUpdateTaskState} />
        </div>
    );
};


