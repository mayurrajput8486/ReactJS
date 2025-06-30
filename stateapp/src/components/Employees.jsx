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

    //to edit the data on the basis of index 
    const [editIndex, setEditIndex] = useState(null)

    //Create function to dynamically handle the form inputs
    const handleInput = (e) =>{
        setFormData({...formData,  [e.target.name] : e.target.value})
    } 

    //To add data
    const addUpdateData = () =>{
        const {name, email, contact, company, role} = formData;
        //to perform normal validation
        if( !name || !contact || !company || !email || !role){
            alert('All Field Required !!!!')
        }else if(editIndex !== null){
            //edit old data of records
            const updateEmpList = [...employees]
            updateEmpList[editIndex] = formData
            setEmployee(updateEmpList)
            setEditIndex(null)   //to clear index for changing button update to add
        }else{
            //Add new record
            setEmployee([...employees, formData])
        }
        setFormData({
            name : '',
            email : '',
            contact : '',
            company : '',
            role : ''
        })
    }
    //When edit button is clicked the data will be loaded in form
    const editHandler = (index) =>{
        //Load Table data into Form
        setFormData(employees[index])
        //          employees[0]
        setEditIndex(index) //set index to track editing  
    }

    //Create Function to delete record using index value
    // use any method to delete records  filter() or  splice()
    //splice(indexNumber, deleteCount) ----> splice(index,1) 
    const deleteHandler = (index) =>{
        //Make a copy of current array using spread operator
        const updatedEmpList = [...employees]

        //Remove 1 item or record from updateEmpList by using splice(indexNumber, deleteCount)
        updatedEmpList.splice(index,1)

        //to update the state
        setEmployee(updatedEmpList)
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
                <button className="btn btn-success w-100" onClick={addUpdateData}>
                    {
                        editIndex !== null ? 'Update Data' : 'Add Data'
                        //0       !== null  -     true           false
                    }
                </button>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.length === 0 ? (<tr><td colSpan={7} className="text-center">No Employee Record here. Please Enter New Record</td></tr>) : (
                        employees.map((emp,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.contact}</td>
                                    <td>{emp.company}</td>
                                    <td>{emp.role}</td>
                                    <td>
                                        <button className="btn btn-warning me-2" onClick={()=>editHandler(index)}>Edit</button>
                                        <button className="btn btn-danger" onClick={()=>deleteHandler(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employees