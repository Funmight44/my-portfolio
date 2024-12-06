import { Route, Routes } from "react-router-dom";
import Hero from "../pages/hero";
import About from "../pages/about";
import Services from "../pages/service";
import Work from "../pages/work";
import Contact from "../pages/contact";
import CSSProjects from "../pages/cssProject";
import JavascriptPro from "../pages/javascriptpro";
import ReactPro from "../pages/reactPro";

const AllRoutes = () => {
    return ( 
        <>
            <main>
                <Routes>
                    <Route path="/"  element={<Hero/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/services"  element={<Services/>}/>
                    <Route path="/work"  element={<Work/>}/>
                    <Route path="/cssProjects"  element={<CSSProjects/>}/>
                    <Route path="/javascript"  element={<JavascriptPro/>}/>
                    <Route path="/reactPro"  element={<ReactPro/>}/>

                    <Route path="/contact"  element={<Contact/>}/>

                </Routes>
            </main>
        </>
     );
}
 
export default AllRoutes;