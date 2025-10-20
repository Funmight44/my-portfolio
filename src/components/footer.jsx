// import logo from "../BG-img/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
           
            <hr/>
            <div className="footer-bottom">
                <p>copyright @Funmight 2024.  All rights reserved.</p>
                <div className="bottom-right">
                    <p>Term of Service </p>
                    <p>Privacy policy</p>
                    <Link to="https://www.linkedin.com/in/akano-funmilayo44"><p> <i class="bi bi-linkedin"></i>Linkedin</p></Link>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;