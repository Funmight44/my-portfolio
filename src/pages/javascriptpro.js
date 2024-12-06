import javascriptData from "../data/javascriptData";
import WorkCard from "../components/workCard";

const JavascriptPro = () => {
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