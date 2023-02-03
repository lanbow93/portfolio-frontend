import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import { homeLoader } from "./loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="" element={<Homepage/>} loader={homeLoader}/>
        </Route>
    )
)

export default router;