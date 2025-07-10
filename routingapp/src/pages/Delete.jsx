import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Delete = () => {

    const [stu, setStu] = useState('')
    const {stuId} = useParams()
    const navigate = useNavigate()

    const getData = async() =>{
        try{
            const res = await axios.get(`http://localhost:8080/students/${stuId}`)
            //console.log(res)
            const result = res.data
            //console.log(result)
            setStu(result)
        }catch(err){
            console.log('Failed to Fetch Data', err)
        }
    }
    useEffect(()=>{
        getData()
    }, [])

    const deleteData = () =>{
        axios.delete(`http://localhost:8080/students/${stuId}`)
        alert('Data Deleted !!!')
        navigate('/studetails')
    }
  return (
    <div className="" style={{height : '50vh'}}>
        <div className="bg-warning w-50 p-5 mx-auto text-center rounded-2  mt-4">
            <h2 className="text-center">Delete Record</h2>
            <div className="fs-3 fw-bold">Student Id : {stu.id}</div>
            <div className="fs-3 fw-bold">Student Name : {stu.fname} {stu.lname}</div>
            <div className="mt-2">
                <button className="btn btn-danger me-4" onClick={deleteData}>Yes</button>
                <NavLink to='/studetails'><button className="btn btn-primary">No</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Delete