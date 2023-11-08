"use client"
import { useContext } from 'react'
import UserHeader from './components/UserHeaderWrapper/fragment/UserHeader'
import { UseApplicationContext } from './context/AuthContext'
import { useRouter } from 'next/navigation'
import { projectCards } from './model/ProjectModel'
import CardProject from './components/ProjectCard'

export default function Home() {
  const { isLoggedIn, actionLogout } = useContext(UseApplicationContext)
  const router = useRouter()

  const handleNewProject = () => {
    router.push("/project/create")
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <div className="flex justify-content-end p-4">
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleNewProject}>
              Create New Project
            </button>
          </div>

          <div className='grid-cols-2 gap-20'>
            {projectCards.map(project => (<CardProject
              key={project.id}
              id={project.id}
              name={project.name}
              users={project.users}
              tasks={project.tasks}

            />)
            )}
          </div>
        </>
      )}
    </>
  )
}
