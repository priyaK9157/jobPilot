import axios from "axios";
import {jobRoute} from "../Api"

export const createJob = async(data) => {
    try{
        const response = await axios.post(jobRoute.createjob, data);
        console.log("resposne", response)
        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error)
    }
}

export const getJobsPostedByUser = async(data) => {
    console.log("hii")
    try{
        console.log("first", data)
        const response = await axios.post(jobRoute.getJobsPostedByUser, data);
        console.log("response", response);
        if(response) {
            return response;
        }
    }catch(error){
        console.error("error", error);
    }
}

export const getJob = async() => {
    console.log("hii")
    try{
        const response = await axios.get(jobRoute.getjob);
        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error);
    }
}


export const getJobById = async(data) => {
    
    try{
        const response = await axios.post(jobRoute.getJobById, {JobId:data});
        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error);
    }
}