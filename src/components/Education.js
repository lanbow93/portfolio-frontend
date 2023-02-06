function Education(props){
    const education = props.data;
    return <div className="education">
        <h2>{education.title}</h2>
        <p>{`${education.facility} - ${education.location}`}</p>
        <p>{education.description}</p>
    </div>
}
export default Education