import { useState } from "react"

const Employees = () => {
    //Form data state for input fields 
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        contact : '',
        company : '',
        role : '' 
    })

    //to store employee data 
    const [employees, setEmployee] = useState([])

    //Create function to dynamically handle the form inputs
    const handleInput = (e) =>{
        setFormData({...formData,  [e.target.name] : e.target.value})
    } 

    //To add data
    const addData = () =>{
        const isValid = formData.name && formData.email && formData.contact && formData.company && formData.role
        if(isValid){
            setEmployee([...employees, formData])
            setFormData({
                name : '',
                email : '',
                contact : '',
                company : '',
                role : ''
            })
        }else{
            alert("All Fields are Mandoatory !!!")
        }
    }
  return (
    <div>
        <h3 className="text-center mt-3">Employee Old Employeer Details</h3>
        <div className="bg-dark w-50 p-3 mx-auto rounded-2 mt-4">
            <div className="mb-3">
                <input
                    type='text'
                    className="form-control"
                    placeholder="Enter Your Full Name"
                    value={formData.name}
                    name="name"
                    onChange={handleInput}
                />
            </div>
            <div className="mb-3">
                <input
                    type='email'
                    className="form-control"
                    placeholder="Enter Valid email"
                    value={formData.email}
                    name="email"
                    onChange={handleInput}
                />
            </div>
            <div className="mb-3">
                <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter 10 digit Mobile Number"
                    value={formData.contact}
                    name="contact"
                    onChange={handleInput}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Old Company Name"    
                    value={formData.company}
                    name="company"
                    onChange={handleInput}
                />
            </div>
            <div className="mb-3">
                <select 
                    className="form-control" 
                    value={formData.role}
                    name="role"
                    onChange={handleInput}
                >
                    <option value=''>Select Role</option>
                    <option value='Backend Developer'>Backend Developer</option>
                    <option value='Frontend Developer'>Frontend Developer</option>
                    <option value='Fullstack Developer'>Fullstack Developer</option>
                    <option value='UI/UX Developer'>UI/UX Developer</option>
                    <option value='Devops Enginner'>Devops Enginner</option>
                </select>
            </div>
            <div>
                <button className="btn btn-success w-100" onClick={addData}>Submit</button>
            </div>
        </div>
        <div className="mt-3 w-75 mx-auto">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Employee Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Old Employer</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.contact}</td>
                                    <td>{emp.company}</td>
                                    <td>{emp.role}</td>
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

export default Employees