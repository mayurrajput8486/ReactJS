import { useContext } from "react"
import {GreetMsg, DevName} from "../context/greet"
const ChildD = () => {
    const mydata = useContext(GreetMsg)
    const devname = useContext(DevName)
    // const variableName = useContext(contextName)
  return (
     <div>
        <h2>I am ChildD Comp - {mydata}</h2>
        <h3>React was created by {devname}</h3>
        {/* <GreetMsg.Consumer>
            {
                (x)=>{
                    return(
                        <div>{x}</div>
                    )
                }
            }
        </GreetMsg.Consumer> */}
    </div>
  )
}

export default ChildD