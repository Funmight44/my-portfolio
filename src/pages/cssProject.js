import UseTitle from "../components/hook/useTitle";
import WorkCard from "../components/workCard";
import cssData from "../data/HcssData";

const CSSProjects = () => {
    UseTitle('CSS projects');

    return ( 
        <section className="work">
        <p className="work_title">My Projects</p>
        <div className="projects">
            {cssData.map((work, index) => (
                <WorkCard key={index}  work={work}/>
            ))}
        </div>
    </section>
     );
}
 
export default CSSProjects;