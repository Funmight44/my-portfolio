import { Link } from "react-router-dom";
import pics from "../BG-img/my pic.jpg"

const Hero = () => {
    return ( 
        <section className="hero">
                <img src={pics} alt="pic"/>
                <h1><span>I'm Akano Funmilayo Adejinmi, </span>frontend web designer based in Nigeria.</h1>
                <p>I am a skilled Frontend Developer with expertise in HTML, CSS, JavaScript, and React.js. 
                    I also work as an Executive Virtual Assistant, proficient in tasks such as email and calendar management, Google Docs proofreading and editing, 
                    as well as creating professional resumes and CVs.
                </p>
                <div className="hero-action">
                    <Link to="/contact"><p className="hero-connect">Connect with me</p></Link>
                    <p className="hero-resume">my resume</p>
                </div>
        </section>
     );
}
 
export default Hero;