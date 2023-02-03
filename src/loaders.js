const URL = "http://localhost:5454/"


export const homeLoader = async () => {
    try {
        return await fetch(URL + "home")
    } catch(error){
        return error
    }
}

export const educationLoader = async () => {
    try {
        return await fetch(URL + "education")
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

export const jobLoader = async () => {
    try {
        return await fetch(URL + "jobs")
    } catch(error){
        return error
    }
}