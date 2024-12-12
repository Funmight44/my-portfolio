import logo from "../BG-img/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
            {/* <div className="footer-top">
                <div className="top-left">
                    <Link to="/"><img src={logo}  alt="logo" className="logo"/></Link>
                    <p>I am a frontend developer from Nigeria.</p>
                </div>
                <div className="footer-top-right">
                    <div className="top-right">
                        <span><i class="bi bi-person-heart"></i></span>
                        <input type="text" placeholder="email"/>
                    </div>
                    <p className="sub-btn">Subscribe</p>
                </div>
            </div> */}
            
            <hr/>
            <div className="footer-bottom">
                <p>copyright @Funmight 2024.  All rights reserved.</p>
                <div className="bottom-right">
                    <p>Term of Service </p>
                    <p>Privacy policy</p>
                    <p>Contact me</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;