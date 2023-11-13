
import Home from '../Home'

function Logout() {


  window.sessionStorage.removeItem("token");


  return (<Home />)
}

export default Logout