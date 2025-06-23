/* import ChildD from "./ChildD"
const ChildC = ({greetC}) => {
  return (
     <div>
        <h2>I am ChildC Comp - {greetC}</h2>
        <ChildD greetD = {greetC}/>
    </div>
  )
}

export default ChildC */

import ChildD from "./ChildD"
import { Appversion, Userinfo } from "../context/greet"
import { useContext } from "react"

const ChildC = () => {
    const appVer = useContext(Appversion)
    const userprofile = useContext(Userinfo)
  return (
     <div>
        <h2>I am ChildC Comp - {appVer} </h2>
        <h2>User Data -</h2>
        <img src={userprofile.avatar} alt={userprofile.name}></img>
        <div>
            {userprofile.name} - {userprofile.age} - {userprofile.contact}
        </div>
        <ChildD/>
    </div>
  )
}

export default ChildC