import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Job from "../components/Job";
import Education from "../components/Education";
function About(props) {
    const about = useLoaderData()
    console.log(about)
    const [selected, setSelected] = useState("jobHistory")
    const [aboutDisplay, setAboutDisplay] = useState(about.jobs.map(job => <Job data={job} key={job._id} />))

    const updateComponent = (event) => {
        if(event.target.value === "jobHistory") {
            setSelected("jobHistory")
            setAboutDisplay(about.jobs.map(job => <Job data={job} key={job._id} />))
        } else {
            setSelected("education")
            setAboutDisplay(about.education.map(item => <Education data={item} key={item._id} />))
        }
    }



    return <div className="about">
    <div className="tiles">
        <button onClick={updateComponent} className={(selected === "jobHistory")? "selected" : ""} value="jobHistory" >Job History</button>
        <button onClick={updateComponent} className={(selected === "education")? "selected" : ""} value="education" >Education</button>
    </div>
    <div className="component">
        <div className="projectArea">
            {aboutDisplay}
        </div>
    </div>
</div>
};

export default About;