import { useReducer } from "react"

const Counter = () => {
    //const [state, dispatch] = useReducer(reducer, initialState)
    const reducer = (state,action) =>{
        switch(action){
            case 'inc' : return state + 1
            case 'dec' : return state - 1
            default : state
        }
    }


    const [count, dispatch] = useReducer(reducer,0)
  return (
    <div>
        <h2>Counter Application</h2>
        <div>
            <button onClick={()=>dispatch('inc')}>+</button>
            <button>{count}</button>
            <button onClick={()=>dispatch('dec')}>-</button>
        </div>
        
    </div>
  )
}

export default Counter