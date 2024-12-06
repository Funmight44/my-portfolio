import reactProjects from "../data/reactPro";
import WorkCard from "../components/workCard";

const ReactPro = () => {
    return ( 
        <section className="work">
        <p className="work_title">My Projects</p>
        <div className="projects">
            {reactProjects.map((work, index) => (
                <WorkCard key={index}  work={work}/>
            ))}
        </div>
     </section>
     );
}
 
export default ReactPro;