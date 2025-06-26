import { useState } from "react"
const Userinfo = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState()

    const fnameHandler = (event) =>{
        setFname(event.target.value)
    }

    const lnameHandler = (e) =>{
        setLname(e.target.value)
    }

    const ageHandler = (e) =>{
        setAge(e.target.value)
    }
  return (
    <div>
        <h3 className="text-center">User Information</h3>
        <div className="bg-dark p-3 w-50 mx-auto rounded-2">
            <div className="mb-3">
                <input 
                    type="text"
                    placeholder="Enter First Name"
                    className="form-control"
                    onChange={fnameHandler}
                    value={fname}
                />
            </div>
           <div className="mb-3">
                <input 
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control"
                    onChange={lnameHandler}
                    value={lname}
                />
           </div>
           <div className="mb-3">
                <input 
                    type="number"
                    placeholder="Enter Age"
                    className="form-control"
                    onChange={ageHandler}
                    value={age}
                />
           </div>
           <div className="text-warning">
                <h4>My Full Name is <span className="text-light">{fname} {lname}</span> and I am <span className="text-light">{age}</span> years old</h4>
           </div>
        </div>
    </div>
  )
}

export default Userinfo