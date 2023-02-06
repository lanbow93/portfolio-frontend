function Job(props){
    console.log(props.data)
    const job = props.data
    return <div className="jobCard">
        <h2>{job.title}</h2>
        <h4>{job.company}</h4>
        <h4>{job.date}</h4>
        <h4>{job.location}</h4>
        
        {job.details.map(detail => <p>{detail}</p>)}
    </div>
}

export default Job