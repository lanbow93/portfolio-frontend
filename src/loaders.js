const URL = "https://portfolio-backend-app.herokuapp.com/"


export const homeLoader = async () => {
    try {
        return await fetch(URL + "home")
    } catch(error){
        return error
    }
}
export const aboutLoader = async () => {
    try {
        return await fetch(URL + "about")
    } catch(error){
        return error
    }
}
export const projectsLoader = async () => {
    try {
        return await fetch(URL + "projects")
    } catch(error){
        return error
    }
}
