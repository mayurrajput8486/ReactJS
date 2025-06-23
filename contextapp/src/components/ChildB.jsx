/* import ChildC from "./ChildC"

const ChildB = ({greetB}) => {
  return (
     <div>
        <h2>I am ChildB Comp - {greetB}</h2>
        <ChildC greetC = {greetB}/>
    </div>
  )
}

export default ChildB */

import ChildC from "./ChildC"

const ChildB = () => {
  return (
     <div>
        <h2>I am ChildB Comp</h2>
        <ChildC/>
    </div>
  )
}

export default ChildB