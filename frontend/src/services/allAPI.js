import { commonAPI } from "./Common"
import { SERVER_URL } from "./serverURL"

//user Login
export const registerAPI =async(reqbody)=>{
    return await commonAPI('POST',`${SERVER_URL}/api/tasks/register`,reqbody)
}
export const loginAPI =async(reqbody)=>{
    return await commonAPI('POST',`${SERVER_URL}/api/tasks/login`,reqbody)
}



//task
export const addTask =async(reqbody,reqHeader)=>{
    
    return await commonAPI('POST',`${SERVER_URL}/api/tasks`,reqbody,reqHeader)  
} 
export const getTasks =async(searchkey,reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/api/tasks?search=${searchkey}`,"",reqHeader)
}
export const deleteTask =async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/api/tasks/${id}`,{},reqHeader)
}
export const updateTask =async(id,reqbody,)=>{
    return await commonAPI('PUT',`${SERVER_URL}/api/tasks/${id}`,reqbody)
}
export const getATask =async(id,reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/api/tasks/${id}`,"",reqHeader)
}