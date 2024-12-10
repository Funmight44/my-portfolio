import reactProjects from "../data/reactPro";
import WorkCard from "../components/workCard";
import UseTitle from "../components/hook/useTitle";

const ReactPro = () => {
    UseTitle("React.js projects")


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