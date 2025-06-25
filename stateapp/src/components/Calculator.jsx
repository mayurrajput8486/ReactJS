import { useState } from 'react'
import './Calculator.css'
import {evaluate} from 'mathjs'
const Calculator = () => {

    const [cal,setCal] = useState('')

    const show = (data) =>{
        setCal(cal + data)
    }

    const solve = () =>{
        const result = evaluate(cal)
        setCal(result.toString())
    }

    const clearData = () =>{
        setCal('')
    }

    const clearLastEntry = () =>{
        setCal(cal.slice(0,-1))
    }
    
    /* const mystr = "Welcome"
    console.log(mystr)
    const myresult = mystr.slice(0,-1)
    console.log(myresult) */

  return (
    <div>
        <h2 className="text-center">Calculator using state</h2>
        <div className="calculator">
            <div className="screen">
                <input
                    type="text"
                    className='mydata'
                    value={cal}
                    readOnly
                />
            </div>
            <div className="buttons">
                <button className="button bt" onClick={()=>show('1')}>1</button>
                <button className="button bt" onClick={()=>show('2')}>2</button>
                <button className="button bt" onClick={()=>show('3')}>3</button>
                <button className="button operator" onClick={()=>show('+')}>+</button>

                <button className="button bt" onClick={()=>show('4')}>4</button>
                <button className="button bt" onClick={()=>show('5')}>5</button>
                <button className="button bt" onClick={()=>show('6')}>6</button>
                <button className="button operator" onClick={()=>show('-')}>-</button>

                <button className="button bt" onClick={()=>show('7')}>7</button>
                <button className="button bt" onClick={()=>show('8')}>8</button>
                <button className="button bt" onClick={()=>show('9')}>9</button>
                <button className="button operator" onClick={()=>show('*')}>*</button>

                <button className="button bt" onClick={()=>show('0')}>0</button>
                <button className="button bt" onClick={()=>show('.')}>.</button>
                <button className="button"    onClick={()=>show('/')}>/</button>
                <button className="button operator" onClick={solve}>=</button>

                <button className="button clear" onClick={clearData}>CLEAR</button>
                <button className="button edit" onClick={clearLastEntry}>&#9003;</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator