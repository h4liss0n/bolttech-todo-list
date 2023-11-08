"use client"

import React from 'react';
import { ProjectCard } from '../model/ProjectModel';


const CardProject: React.FC<ProjectCard> = ({ name, tasks, users }) => {
    return (
        <div className={'project-card bg-white p-4 rounded-md shadow-sm'}>
            <div className="project-header bg-blue-400 p-4">
                <h2 className="text-white">{name}</h2>
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

export default CardProject;
