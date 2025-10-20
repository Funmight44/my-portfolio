import { Link } from "react-router-dom";

const WorkCard = ({work}) => {
    return ( 
        <div className="project animate__animated animate__fadeInUp">
            <img src={work.pic} alt="pic"/>
            <p className="work-name">{work.name}</p>
            <p className="work-desc">{work.desc}</p>
            <Link to={work.link}><p className="work-link">View<i class="bi bi-arrow-right-short"></i></p></Link>
        </div>
     );
}
 
export default WorkCard;