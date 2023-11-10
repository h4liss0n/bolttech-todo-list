import { ProjectCardTask } from "@/app/model/ProjectModel";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
    tasks: ProjectCardTask[]
    onUpdateTaskState: (taskId: string, status: boolean) => void
}

const TasksGroup: React.FC<Props> = ({ tasks, onUpdateTaskState }) => {

    const handleUpdateTaskStatus = (taskId: string, status: boolean) => {
        onUpdateTaskState(taskId, status)
    }
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="text-left text-blue-200 text-xs p-1" style={{ width: "100%" }}>Description</th>
                    <th className="text-left text-blue-200 text-xs p-1"></th>
                    <th className="text-left text-blue-200 text-xs p-1">Done</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id} >
                        <td className="p-1">
                            <p className="text-left text-blue-500">{task.description}</p>
                        </td>
                        <td className="text-center">
                            <button type="button" className='m-1'>
                                <FontAwesomeIcon icon={faTrash} className='text-red-300' />
                            </button>
                        </td>
                        <td className="text-center text-blue-500">
                            <input type="checkbox" checked={task.done} onChange={() => handleUpdateTaskStatus(task.id, !task.done)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >

    );
};

export default TasksGroup;