function Job(props){
    console.log(props.data)
    return <div className="jobCard">
        <h2>{props.data.title}</h2>
    </div>
}

export default Job