import { useState } from "react";
import { Link} from "react-router-dom";
import Dropdown from "./dropDown";

import logo from "../BG-img/logo.png"

const Header = () => {
    const [toogle, setToogle] = useState(false);
    const [showdropdown, setShowdropdown] = useState(false)

    return ( 
       <>
            <header className="relative">
                <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                <nav>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/skills"><p >Skills</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                    <Link to="/cssProjects"><p onClick={() => setShowdropdown(!showdropdown)}>projects</p></Link>
                    {showdropdown && <Dropdown  setShowdropdown={setShowdropdown}/>}
                    {/* <Link to="/contact"><p>Contact</p></Link> */}
                </nav>
                  <Link to="/contact"> <p className="connect">Contact me</p></Link> 
                <span className="menubar"  onClick={() => setToogle(!toogle)}><i class="bi bi-list"></i></span>
            </header>

               <nav className={`sidebar ${toogle ? "active" : ''}  `} onClick={() => setToogle(false)}>
                  <span className="cross" onClick={() => setToogle(false)}><i class="bi bi-cross"></i></span>
                    <Link to="/"><p >Home</p></Link>
                    <Link to="/about"><p >About</p></Link>
                    <Link to="/skills"><p >Skills</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                    {/* <Link to=""><p onClick={() => setShowdropdown(!showdropdown)}>projects</p></Link>
                    {showdropdown && <Dropdown  setShowdropdown={setShowdropdown}/>}
                    <Link to="/contact"><p>Contact</p></Link> */}
                    <Link to="/work"><p>projects</p></Link>
                </nav>
            
        </>

     );
}
 
export default Header;