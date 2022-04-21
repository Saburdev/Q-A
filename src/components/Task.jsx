import React from 'react'
import { useParams } from 'react-router-dom'
import { useTestContext } from '../Context/TestContext'

export const Task = () => {
    const { id } = useParams()

    const { test } = useTestContext()  
    const task = test[+id]
    if(!test.length) return <p>YUKLANMOQDA...</p>
    return (
        <div className='max-w-7xl mx-auto mt-36'>
            <div className="bg-base-300 p-10 rounded-md shadow">
                {task.question}
            </div>
            <div className="grid grid-cols-2 gap-10 my-20">
                <button className='btn btn-lg'>A.{task.variants[0].content} </button>
                <button className='btn btn-lg'>B.{task.variants[1].content} </button>
                <button className='btn btn-lg'>C.{task.variants[2].content} </button>
                <button className='btn btn-lg'>D.{task.variants[3].content} </button>
            </div>
        </div>
    )
}
