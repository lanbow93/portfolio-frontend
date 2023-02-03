import { useLoaderData } from "react-router-dom"
function Homepage(props) {
    const data = useLoaderData()
    console.log(data)
    return <div className="homepage">
        <h1>Homepage</h1>
    </div>
} 

export default Homepage