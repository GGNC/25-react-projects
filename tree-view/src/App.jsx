import SideBar from "./components/SideBar";
import {sideMenu} from "./components/data";
function App() {
  return (
    <SideBar menu={sideMenu}/>
  )
}

export default App;