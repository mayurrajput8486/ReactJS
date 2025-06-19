import virat from '../assets/virat.jpg'
import rohit from '../assets/rohit.jpg'
import ms from '../assets/ms.jpg'
import surya from '../assets/surya.jpg'
import hardik from '../assets/hardik.jpg'
import krunal from '../assets/krunal.jpg'
import sachin from '../assets/sachin.jpg'
import viru from '../assets/viru.jpg'
import ravindra from '../assets/ravindra.jpg'
import kedar from '../assets/kedar.jpg'
import gill from '../assets/gill.jpg'
const Userdetails = () =>{
    const users = [
        {uid : 101, name : "Virat Kohli", city : "Delhi", age : 35, iplteam : "RCB", country : 'India', avatar : virat},
        {uid : 102, name : "Rohit Sharma", city  : "Mumbai", age : 36, iplteam : "MI", country : "India", avatar : rohit},
        {uid : 103, name : "MS Dhoni", city : "Ranchi", age : 42, iplteam : "CSK", country : "India", avatar : ms},
        {uid : 104, name : "Surya Yadav", city : "Mumbai", age : 38, iplteam : "MI", country : "India", avatar : surya},
        {uid : 105, name : "Hardik Paandya", city : "Mumbai", age : 31, iplteam : "MI", country : "India", avatar : hardik},
        {uid : 106, name : "Krunal Pandya", city : "Gujrat", age : 32, iplteam : "RCB", country : "India", avatar : krunal},
        {uid : 107, name : "Sachin Tendulkar", city : "Mumbai", age : 45, iplteam : "MI", country : "India", avatar : sachin},
        {uid : 108, name : "Kedhar Jadhav", city : "Mumbai", age : 36, iplteam : "CSK", country : "India", avatar : kedar},
        {uid : 109, name : "Shubhman Gill", city : "Punjab", age : 25, iplteam : "GT", country : "India", avatar : gill
        },
        {uid : 110, name : "Ravindra Jadeja", city : "Rajkot", age : 35, iplteam : "CSK", country : "India", avatar : ravindra},
        {uid : 111, name : "Viru", city : "Delhi", age : 40, iplteam : "DC", country : "India", avatar : viru}
    
    ]
    return(
        <div>
            <h1>User Deatils - </h1>
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>ID</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>IPL Team</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((player,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{player.uid}</td>
                                        <td><img src={player.avatar} alt={player.name} width={100}/></td>
                                        <td>{player.name}</td>
                                        <td>{player.city}</td>
                                        <td>{player.age}</td>
                                        <td>{player.iplteam}</td>
                                        <td>{player.country}</td>
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
export default Userdetails;