import javascriptData from "../data/javascriptData";
import WorkCard from "../components/workCard";
import UseTitle from "../components/hook/useTitle";

const JavascriptPro = () => {
    UseTitle("JavaScript projects")

    return ( 
        <section className="work">
            <p className="work_title">My Projects</p>
            <div className="projects">
                {javascriptData.map((work, index) => (
                    <WorkCard key={index}  work={work}/>
                ))}
            </div>
         </section>
     );
}
 
export default JavascriptPro;