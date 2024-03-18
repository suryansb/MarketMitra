
//import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import img1 from "../../assets/img/loggo-removebg-preview.png";  

function Navigations() {


  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container" style={{marginTop:0,marginBottom:0}}>
    <a className="navbar-brand" href="#">
      <img src={img1} alt="Logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="ml-auto">
      <ul className="navbar-nav">
        <li className="nav-item q">
          <button className="btn">Sell</button>
        </li>
        <li className="nav-item ">
          <button className="btn btn-success">Login</button>
        </li>
        <li className="nav-item q">
          <button className="btn">Signup</button>
        </li>
      </ul>
    </div>

  </div>
 </nav>
 <hr/>
 </>
  );
}



export default Navigations;