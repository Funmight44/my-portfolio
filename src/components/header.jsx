import { useState } from "react";
import { Link} from "react-router-dom";
// import Dropdown from "./dropDown";

import logo from "../BG-img/logo.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
    const [toogle, setToogle] = useState(false);

    useGSAP(() => {
        gsap.fromTo('header', {y:-100, opacity: 0, duration:2}, {y:0, opacity:1, duration:2})

    }, [])

    return ( 
       <>
            <header>
                <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                <nav>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/skills"><p >Skills</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                    <Link to="/work"><p>projects</p></Link>
                    {/* {showdropdown && <Dropdown  setShowdropdown={setShowdropdown}/>} */}
                
                </nav>
                  <Link to="/contact"> <p className="connect">Contact</p></Link> 
                  <span className="menubar"  onClick={() => setToogle(!toogle)}><i class="bi bi-list"></i></span>
            </header>

            {/* mobile view nav */}
               <nav className={`sidebar ${toogle ? "active" : ''}  `} onClick={() => setToogle(false)}>
                  <span className="cross" onClick={() => setToogle(false)}><i class="bi bi-cross"></i></span>
                    <Link to="/"><p >Home</p></Link>
                    <Link to="/about"><p >About</p></Link>
                    <Link to="/skills"><p >Skills</p></Link>
                    <Link to="/services"><p>Services</p></Link>
                    <Link to="/work"><p>projects</p></Link>
                </nav>
            
        </>

     );
}
 
export default Header;