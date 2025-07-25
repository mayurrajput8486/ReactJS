import { useRef } from "react"

const Focusapp = () => {
    const nameRef = useRef(null)
    const contactRef = useRef(null)

    const nameFocus = () =>{
        nameRef.current.focus()
    }

    const contactFocus = () =>{
        contactRef.current.focus()
    }
  return (
    
    <div>
        <h2>Focus Input Field</h2>
        <div>
            <input type='text' placeholder="Enter Name" ref={nameRef}/>
            <input type='tel' placeholder="Enter Contact" ref={contactRef}/>

            <button onClick={nameFocus}>Name</button>
            <button onClick={contactFocus}>Contact</button>
        </div>
    </div>
  )
}

export default Focusapp