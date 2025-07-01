import { useEffect, useState } from "react"
const Counter = () => {
    const [count, setCount] = useState(0)

    //The effect runs after every render of the comp

    /* useEffect(()=>{
        console.log('Comp Mounted')
    }) */

    //The effect will not re-run after every re-render
    /* useEffect(()=>{
        console.log('Comp update - Effect Run')
    }, []) */

    /* useEffect(()=>{
        console.log('Comp Update - Effect run')
        alert(`Count is ${count}`)
    },[count === 5]) */

    //cleanup function
    useEffect(()=>{
        console.log('Comp Mount and Update')

        return ()=>{
            console.log('Comp Unmounted')
        }
    },[])
  return (
    <div style={{backgroundColor : 'orange', width : '250px', textAlign : 'center', padding : '20px', fontSize : '25px', margin : 'auto', borderRadius : '25px'}}>
        <h3>Counter For useEffect</h3>
        <div>
            <button  style={{fontSize : '20px'}} onClick={()=>setCount(count + 1)}>+</button>
            <button  style={{fontSize : '20px'}}>{count}</button>
            <button  style={{fontSize : '20px'}} onClick={()=>setCount(count - 1)}>-</button>
        </div>
    </div>
  )
}

export default Counter