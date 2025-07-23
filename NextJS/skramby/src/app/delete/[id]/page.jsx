'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
const Delete = () => {

  const { id } = useParams()
  const router = useRouter()
  const [stu, setStu] = useState('')

  const fetchStuData = async () => {
    const res = await axios.get(`http://localhost:8080/students/${id}`)
    const result = res.data
    setStu(result)
  }

  useEffect(() => {
    fetchStuData()
  }, [])

  const deleteData = () => {
    axios.delete(`http://localhost:8080/students/${id}`)
    alert('Data Deleted !!!')
    router.push('/studetails')
  }
  return (
    <div className='mb-5'>
      <div className='bg-dark mx-auto mt-5 text-light w-50 p-3 rounded-4'>
        <div>
          <h2 className='text-center'>Delete Records</h2>
          <h3>Student ID - {stu.id}</h3>
          <h3>Student Full Name - {stu.fname} {stu.lname}</h3>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-danger me-3' onClick={deleteData}>Yes</button>
          <Link href='/studetails'><button className='btn btn-success'>No</button></Link> 
        </div>
      </div>

    </div>
  )
}

export default Delete