"use client"
import { useContext } from 'react'
import { UseApplicationContext } from './context/AuthContext'
import { useRouter } from 'next/navigation'
import { ProjectBoard } from './project-board/ProjectBoard'

export default function Home() {
  const { isLoggedIn } = useContext(UseApplicationContext)
  return (
    <>
      <ProjectBoard isLoggedIn={isLoggedIn} />
    </>
  )
}
