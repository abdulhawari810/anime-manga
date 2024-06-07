import {Outlet} from "react-router-dom";
import Home from "./views/Home.jsx";
import Navbar from "./components/Navbar.jsx";
function App (){
  return(
  <>
    <Navbar />
    <Outlet />
  </>
  );
}
export default App;