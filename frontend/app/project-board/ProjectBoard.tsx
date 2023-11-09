import { useCallback, useEffect, useState } from "react"
import { ProjectServiceApi } from "../service/ProjectService"
import { Project } from "../model/ProjectModel"
import { ProjectCreateButton } from "./fragment/ProjectCreateButton"
import { CardProject } from "./fragment/ProjectCard"
import { useRouter } from "next/navigation"


interface ProjectBoardProps {
    isLoggedIn: boolean
}

export const ProjectBoard: React.FC<ProjectBoardProps> = ({ isLoggedIn }) => {
    const [projects, setProjects] = useState<Project[]>([])
    const router = useRouter()



    const getData = useCallback(async () => {
        const data = await ProjectServiceApi.getAll()
        setProjects(data)
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            getData()
        }
    }, [getData, isLoggedIn])




    const handleDelete = async (id: number) => {
        await ProjectServiceApi.delete(id)
        await getData()
    }

    const handleEdit = async (id: number) => {
        router.push(`/project/${id}`)
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
                        users={[]}
                        tasks={[]}
                        onDelete={handleDelete}
                        onEdit={handleEdit}

                    />)
                )}
            </div>

        </>)

}

