import { useCallback, useEffect, useState } from "react"
import { ProjectServiceApi } from "../service/ProjectService"
import { Project, ProjectCard } from "../model/ProjectModel"
import { ProjectCreateButton } from "./fragment/ProjectCreateButton"
import { CardProject } from "./fragment/ProjectCard"
import { useRouter } from "next/navigation"
import { TaskService } from "../service/TaskService"


interface ProjectBoardProps {
    isLoggedIn: boolean
}

export const ProjectBoard: React.FC<ProjectBoardProps> = ({ isLoggedIn }) => {
    const [projects, setProjects] = useState<ProjectCard[]>([])
    const router = useRouter()



    const getData = useCallback(async () => {
        const data = await ProjectServiceApi.getAll()
        if (data) {
            setProjects(data)
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            getData()
        }
    }, [getData, isLoggedIn])




    const handleDelete = async (projectId: string) => {
        await ProjectServiceApi.delete(projectId)
        await getData()
    }

    const handleEdit = async (projectId: string) => {
        router.push(`/project/${projectId}`)
    }

    const handleAddTask = async (projectId: string) => {
        router.push(`/project/${projectId}/task`)
    }

    const handleUpdateTaskState = async (taskId: string, status: boolean) => {
        await TaskService.updateStatus(taskId, status)
        getData()
    }

    if (!isLoggedIn) {
        return <></>
    }

    return (
        <>
            <ProjectCreateButton />
            <div className='grid-cols-2 gap-20'>
                {projects.map(project => (
                    <CardProject
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        users={project.users}
                        tasks={project.tasks}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onAdd={handleAddTask}
                        onUpdateTaskState={handleUpdateTaskState}
                    />)
                )}
            </div>

        </>)

}

