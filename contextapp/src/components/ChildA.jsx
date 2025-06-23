/* import ChildB from './ChildB'

const ChildA = ({greetA}) => {
  return (
    <div>
        <h2>I am ChildA Comp - {greetA}</h2>
        <ChildB greetB={greetA}/>
    </div>
  )
}

export default ChildA */

import ChildB from './ChildB'

const ChildA = () => {
  return (
    <div>
        <h2>I am ChildA Comp</h2>
        <ChildB/>
    </div>
  )
}

export default ChildA