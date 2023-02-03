import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import { homeLoader, projectsLoader, aboutLoader } from "./loaders";
import About from "./pages/About";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="" element={<Homepage/>} loader={homeLoader}/>
            <Route path="/about" element={<About/>} loader={aboutLoader}/>
            <Route path="/projects" element={<Projects/>} loader={projectsLoader}/>

        </Route>
    )
)

export default router;