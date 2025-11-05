import { useEffect, useState } from "react";
import UseTitle from "../components/hook/useTitle";
import WorkCard from "../components/workCard";
import myWorks from "../data/workData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Work = () => {
    useGSAP(() => {
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut', duration:1}})
        tl.from('.work h2', {opacity:0, y:-40, duration:1})
         .from(".category-btns button", { opacity: 1, y: 25, stagger: 0.12 });
    }, [])



    UseTitle("projects page");
    const [filter, setFilter] = useState([]);  

    useEffect(() => {
        if(myWorks && myWorks.length > 0){
            setFilter(myWorks)
        }
    }, []);

    function filterByCategory(category){
        const filterCategories = myWorks.filter(item => item.category.toLowerCase() === category.toLowerCase())
        setFilter(filterCategories)
    }

    function getAll(){
        setFilter(myWorks)
    }

    return ( 
        <section className="work">
            <h2>Select Project category</h2>
            <div className="category-btns">
                <button onClick={() => getAll()}>All</button>
                <button onClick={() => filterByCategory("HTML & CSS")}>HTML & CSS</button>
                <button onClick={() => filterByCategory("JavaScript")}>Javascript</button>
                <button onClick={() => filterByCategory("React")}>React.JS</button>
            </div>
            <div className="projects">
                {filter.map((work, index) => (
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