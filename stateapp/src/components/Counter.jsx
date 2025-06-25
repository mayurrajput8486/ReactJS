import { useState } from "react"
const Counter = () =>{

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    /* const increment = () =>{
        setCount((prevState)=>prevState + 1)
        //             0    =>      0   + 1 = 1
        setCount((prevState)=>prevState + 1)
        //             1   =>       1   +1  = 2
        setCount((prevState)=>prevState + 1)
        //             2   =>       2   + 1 = 3
        
    } */

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div className="mt-5 text-center">
            <h1>Learn State in React - Functional Comp</h1>
            <div className="bg-primary w-50 mx-auto mt-4 rounded-3 p-3 text-light">
                <h2>Add Items to Cart</h2>
                <div className="btn-group">
                    <button className="btn btn-dark" onClick={increment}>+</button>
                    {/* <button className="btn btn-dark" onClick={()=>setCount(count + 1)}>+</button> */}
                    <button className="btn btn-light">{count}</button>
                    <button className="btn btn-dark" onClick={decrement}>-</button>
                </div>
            </div>
        </div>
    )
}
export default Counter;