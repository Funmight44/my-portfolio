// import mouse from "../BG-img/mouse-pic.jpg"
import { useGSAP } from "@gsap/react";
import pics from "../BG-img/proPic.jpg"
import UseTitle from "../components/hook/useTitle";
import gsap from "gsap";


const About = () => {
    UseTitle('about page');

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.fromTo('about-left img', {x:200, opacity:0, duration:1}, {x:0, opacity:1, duration:1})
    }, [])


    return ( 
        <section className="about">
                <h1>About me</h1>
            <div className="about-section">
                <div className="about-left">
                    <img src={pics} alt="pic"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a frontend developer and an executive virtual Assitance</p>
                        <p>As a frontend developer, I have expirence in HTML, CSS, Javascript and React.js.</p>
                        <p> As an executive VA, I have knowledge of email management,  calender management, <br />
                        Google Doc proofreading and editing, resume and CV creation etc.</p>  
                    </div>
                    <div className="about-skills">
                        <div className="skill"><p>HTML</p><hr style={{width:"80%"}}/></div>
                        <div className="skill"><p>CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                        <div className="skill"><p>React.js</p><hr style={{width:"70%"}}/></div>
                        <div className="skill"><p>Google doc proofreading and editing</p><hr style={{width:"70%"}}/></div>
                        <div className="skill"><p>email management</p><hr style={{width:"70%"}}/></div>
                        <div className="skill"><p>calender management</p><hr style={{width:"70%"}}/></div>
                    </div>
                </div>
            </div>
            {/* <div className="achievements">
                <div className="achievement">
                    <h2>50+</h2>
                    <p>experience</p>
                </div>
                <hr/>
                <div className="achievement">
                    <h2>20+</h2>
                    <p>Project Completed</p>
                </div>
                <hr/>
            </div> */}
        </section>
     );
}
 
export default About;