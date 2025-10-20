import { Link } from "react-router-dom";
import pics from "../BG-img/proPic.jpg"
import UseTitle from "../components/hook/useTitle";

const Hero = () => {
    UseTitle("home page")


    return ( 
        <section className="hero">
                <img src={pics} alt="pic"/>
                <h1><span>I'm Akano-Adejinmi Funmilayo, </span>frontend web designer based in Nigeria.</h1>
                <p>I am a skilled Frontend Developer with expertise in HTML, CSS, JavaScript, and React.js. 
                    I also work as an Executive Virtual Assistant, proficient in tasks such as email and calendar management, Google Docs proofreading and editing, 
                    as well as creating professional resumes and CVs and Data Entry
                </p>
                <div className="hero-action ">
                    <Link to="/contact"><p className="hero-connect">Contact me</p></Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <p className="hero-resume">my resume</p></a>
                </div>
        </section>
     );
}
 
export default Hero;