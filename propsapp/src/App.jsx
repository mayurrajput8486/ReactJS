import Child from './components/Child'
import About from './components/About';
const App = () =>{

  const devInfo = {
    devName : "Jordan Walke",
    company : "Facebook",
    year : 2013
  }

  return(
    <div>
      <h1>Learn Props in React</h1>
      <h2>Parent Comp - App.jsx</h2>
      <Child greet="Welcome to ReactJS"/>
      <About info="React is a JavaScript Library used for creating SPA" moreInfo = {devInfo}/>
    </div>
  )
}
export default App;