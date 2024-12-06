const Footer = () => {
    return ( 
        <footer>
    
            <div className="footer-top">
                <div className="top-left">
                    <h1>Layhor Consults.</h1>
                    <p>I am a frontend developer from Nigeria.</p>
                </div>
                <div className="footer-top-right">
                    <div className="top-right">
                        <span><i class="bi bi-person-heart"></i></span>
                        <input type="text" placeholder="email"/>
                    </div>
                    <p className="sub-btn">Subscribe</p>
                </div>
            </div>
            
            <hr/>
            <div className="footer-bottom">
                <p>copywrite @2024 Funmight.  All rights reserved.</p>
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