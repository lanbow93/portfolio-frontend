import { useLoaderData } from "react-router-dom"
function Homepage(props) {
    const data = useLoaderData()
    return <div className="homepage">
        <div className="statement">
            <h2>Full-Stack developer building responsive, accessible web applications with Express, JavaScript, and React</h2>
        </div>
        <div className="section headshot">
            <img src={data.headshot} alt="Headshot of developer cropped in a circle"/>
        </div>
        <div className="section contacts">
            <h1>Contact Me!</h1>
            <p>{data.contact.email}</p>
            <div className="iconArea">
                <div className="linkedin">
                    <a href={data.contact.linkedin} target="_blank" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" alt="LinkedIn Icon that links to LinkedIn profile" />
                    </a>
                </div>
                <div className="github">
                    <a href={data.contact.github} target="_blank" rel="noopener">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github Icon that links to Github profile" width="90rem"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="section bio">
            <p>{data.bio[0].split(".")[0]}.</p>
            <p>{data.bio[0].split(".")[1]}.</p>
            <p>{data.bio[1].split(".")[0]}.</p>
            <p>{data.bio[1].split(".")[1]}.</p>
        </div>
    </div>
} 
export default Homepage