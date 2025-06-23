import { createContext } from "react";

const GreetMsg = createContext()
const DevName  = createContext()
const Appversion = createContext()
const Userinfo = createContext()

//export default GreetMsg
export { GreetMsg, DevName, Appversion, Userinfo }

//if context is passed in { } then context also import in  { }