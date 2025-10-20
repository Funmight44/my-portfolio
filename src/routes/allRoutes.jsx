import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Hero from "../pages/hero";
// import About from "../pages/about";
// import Services from "../pages/service";
// import Work from "../pages/work";
// import Contact from "../pages/contact";
// import CSSProjects from "../pages/cssProject";
// import JavascriptPro from "../pages/javascriptpro";
// import ReactPro from "../pages/reactPro";
// import Skills from "../pages/skills";

const Hero = lazy(() => import("../pages/hero"));
const About = lazy(() => import("../pages/about"));
const Services = lazy(() => import("../pages/service"));
const Work = lazy(() => import("../pages/work"));
const Contact = lazy(() => import("../pages/contact"));
const Skills = lazy(() => import("../pages/skills"));



const AllRoutes = () => {
    return ( 
        <>
            <main>
                <Suspense fallback={<div className="loader"><i class="bi bi-arrow-clockwise"></i></div>}>
                    <Routes>
                        <Route path="/"  element={<Hero/>}/>
                        <Route path="/about"  element={<About/>}/>
                        <Route path="/skills"  element={<Skills/>}/>
                        <Route path="/services"  element={<Services/>}/>
                        <Route path="/work"  element={<Work/>}/>
                        <Route path="/contact"  element={<Contact/>}/>

                    </Routes>
                </Suspense>
            </main>
        </>
     );
}
 
export default AllRoutes;