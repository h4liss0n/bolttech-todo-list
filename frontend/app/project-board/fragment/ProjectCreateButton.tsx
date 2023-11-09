
import { useRouter } from 'next/navigation'


interface ProjectCreateButtonProps {

}

export const ProjectCreateButton: React.FC<ProjectCreateButtonProps> = () => {
    const router = useRouter()

    const handleNewProject = () => {
        router.push("/project/create")
    }

    return (
        <div className="flex justify-content-end p-4">
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleNewProject}>
                Create New Project
            </button>
        </div>
    )

}

