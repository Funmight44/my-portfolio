import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const WorkCard = ({work}) => {
    // useGSAP(() => {
    //     gsap.fromTo(".project", {opacity:0, y:50, duration:1}, {opacity:1, duration:2, ease:'Power2.inOut', stagger:0.2})
    // }, [])
    return ( 
        <div className="project">
            <img src={work.pic} alt="pic"/>
            <p className="work-name">{work.name}</p>
            <p className="work-desc">{work.desc}</p>
            <Link to={work.link}><p className="work-link">View<i class="bi bi-arrow-right-short"></i></p></Link>
        </div>
     );
}
 
export default WorkCard;