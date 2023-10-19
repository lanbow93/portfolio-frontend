import { imageProvider } from "../utils/imageProvider"
function IconComponent(props){
    return <div className={`List-img ${props.src}Icon`}>
            <img src={imageProvider(props.src)} alt={`Icon of ${props.src}`} />
        <p>{props.src}</p>
    </div>
}

export default IconComponent