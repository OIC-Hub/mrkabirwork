import Home from "../components/Home"
import {loggedIn} from '../App';
import { useContext } from "react";
function Index(props) {
  let logged = useContext(loggedIn)
  console.log('We are here', logged)
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Index