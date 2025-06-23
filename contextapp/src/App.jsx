import ChildA from './components/ChildA'
import {GreetMsg, DevName, Appversion, Userinfo} from './context/greet'
import virat from './assets/virat.jpg'
const App = () => {

  const user = {
    name : "Virat Kohli",
    age  : 35,
    contact : 7744556633,
    avatar : virat
  }
  return (
    <div>
      <h1>Welcome to Parent Comp</h1>
      <GreetMsg.Provider value="Good Afternoon everyone, we are learning Context API">
        <DevName.Provider value="Jordan Walke">
          <Appversion.Provider value="v19">
            <Userinfo.Provider value={user}>
                  <ChildA/>
            </Userinfo.Provider>
          </Appversion.Provider>
        </DevName.Provider>
      </GreetMsg.Provider>
      
    </div>
  )
}

export default App