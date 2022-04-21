import React from 'react'
import { useParams,Outlet,useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Task } from '../components/Task'
 import { TransitionPage } from '../components/TransitionPage'

export const Tasks = () => {
  
  const { id } = useParams()
  const navigate = useNavigate()

  function next(){
    const index = Number(id) + 1
    navigate('/tasks/${index}')
  }

  return (
    <TransitionPage >
      <Navbar />
      <div>
        <h1 className='text-center text-5xl mt-14'>Quick response to questions</h1>
        <div className='flex justify-center items-center'>
          <Outlet/>
          <button onClick={next} className='btn btn-primary absolute -bottom-20 right-10'>Keyingi</button>
        </div>
      </div>
    </TransitionPage>
  )
}
