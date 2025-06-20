import Team from "./components/Team"
import mydata from './data/teamData'
const App = () => {
  return (
    <div>
      <h1 style={{textAlign : "center", fontFamily : "arial"}}>Our Team Members</h1>
      <Team members={mydata}/>
    </div>
  )
}

export default App