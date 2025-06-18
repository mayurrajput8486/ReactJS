import './User.css'
import rohitImg from '../assets/rohit.jpg'
const User = () =>{
    let greet = "Morning"
    let fname = "Rohit Sharma"
    let age   = 36
    let city  = 'Delhi'
    let cname = 'Skramby Technology Solutions'
    let role  = 'MERN Stack Developer'
    return(
        <div className='rohit'>
            <h2>I am user Comp</h2>
            <img src={rohitImg} alt='rohit' className='myimg'/>
            <div style={{fontSize : '25px'}}>
                Good {greet} everyone, I am {fname} and I am {age} years old. I currently live in {city}. I recently joined {cname} as a {role}
            </div>
        </div>
    )
}
export default User;


