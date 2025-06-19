import './Emp.css'
const Emp = () =>{
    const employee = {
        fname : "Virat Kohli",
        empid : 'BIGPR101',
        contact : 7744556699,
        salary : 85000,
        email : 'virat@gmail.com'
    }
    return(
        <div>
            <h1 className='heading'>Employee Details</h1>
            <div>Employee ID - {employee.empid}</div>
            <div>Employee Name - {employee.fname}</div>
            <div>Employee Contact - {employee.contact}</div>
            <div>Employee Salary -{employee.contact}</div>
            <div>Employee email - {employee.email}</div>
        </div>
    )
}
export default Emp;