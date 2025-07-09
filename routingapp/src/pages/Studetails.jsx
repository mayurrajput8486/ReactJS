import { useEffect, useState } from "react"
import axios from 'axios'
const Studetails = () => {
    const [stu, setStu] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:8080/students')
            //console.log(res)
            const result = res.data
            //console.log(result)
            setStu(result)
        } catch (err) {
            console.log('Failed to fetch data', err)
        }

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <div className="text-center mt-3 mb-3">
                <h1>Register Students Details</h1>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Stuid</th>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>State</th>
                            <th>City</th>
                            <th>DOB</th>
                            <th>Pincode</th>
                            <th>Course</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stu.map((stu, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{stu.id}</td>
                                        <td>{stu.fname} {stu.lname}</td>
                                        <td>{stu.address}</td>
                                        <td>{stu.gender}</td>
                                        <td>{stu.state}</td>
                                        <td>{stu.city}</td>
                                        <td>{stu.dob}</td>
                                        <td>{stu.pincode}</td>
                                        <td>{stu.course}</td>
                                        <td>{stu.contact}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Studetails