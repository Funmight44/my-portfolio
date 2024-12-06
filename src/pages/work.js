import WorkCard from "../components/workCard";
import myWorks from "../data/workData";

const Work = () => {
    return ( 
        <section className="work">
            <p className="work_title">My Projects</p>
            <div className="projects">
                {myWorks.map((work, index) => (
                    <WorkCard key={index}  work={work}/>
                ))}
            </div>
        </section>
     );
}
 
export default Work;


//https://quotes-blog.netlify.app
//https://jokes-app-f.netlify.app
//https://code-book-app.netlify.app
//https://foodrecipes-app-reac.netlify.app
//https://movie-app-cinema.netlify.app
//https://emojipedia-with-reacts.netlify.app
//https://event-manager-js.netlify.app
//https://budget-tracker-li.netlify.app
//https://javascript-quiz-applictation.netlify.app
//https://chimerical-cobbler-d71a0c.netlify.app
//https://funny-tulumba-cddd39.netlify.app

//https://storied-creponne-f2e296.netlify.app