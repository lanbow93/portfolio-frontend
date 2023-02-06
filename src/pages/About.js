import { useLoaderData } from "react-router-dom";

function About(props) {
    const About = useLoaderData()
    console.log(About)
    return <div className="About">
        <h1>About Page Connected</h1>



    </div>
};

export default About;