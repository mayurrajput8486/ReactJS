'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Studashboard = () => {
    const [student, setStudent] = useState('')
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    console.log(id)
    const stuGetData = async() =>{
        const res = await axios.get(`http://localhost:8080/students/${id}`)
        const result = res.data
        console.log(result)
        setStudent(result)
    }

    useEffect(()=>{
        stuGetData()
    },[id])

  return (
    <div>
        <h2 className="mt-3 text-center">Welcome {student.fname} {student.lname}</h2>
        <ul className="list-group w-50 mx-auto mt-3">
            <li className="list-group-item">
                <i className="bi bi-person-square me-2 fs-3"></i>
                <strong>Full Name</strong> - {student.fname} {student.lname}</li>
            <li className="list-group-item"><strong>Address</strong> - {student.address}</li>
            <li className="list-group-item"><strong>Gender</strong>  - {student.gender}</li>
            <li className="list-group-item"><strong>DOB</strong> - {student.dob}</li>
            <li className="list-group-item"><strong>State</strong> - {student.state}</li>
            <li className="list-group-item"><strong>City</strong> - {student.city}</li>
            <li className="list-group-item"><strong>Pincode</strong> - {student.pincode}</li>
            <li className="list-group-item"><strong>Course</strong> - {student.course}</li>
            <li className="list-group-item"><strong>Contact</strong> - {student.contact}</li>
        </ul>
        <div className="text-center m-3">
            <Link href='/stulogin'><button className="btn btn-danger">Logout</button></Link>
        </div>
    </div>
  )
}

export default Studashboard