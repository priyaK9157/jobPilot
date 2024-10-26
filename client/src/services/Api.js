


const backend_url = process.env.BACKEND_URL || "http://localhost:5000";

export const authRoute = {

    createacc : backend_url + "/api/createacc",
    signin : backend_url + "/api/signin",
    generateotp: backend_url + "/api/generate",
    verifyotp: backend_url + "/api/verify",
    forgetpassword: backend_url + "/api/forget-password",
    resetpassword: backend_url + "/api/reset-password",
    updateaccount : backend_url + "/api/update-account",
    getUserByEmail: backend_url + "/api/user",
}


export const jobRoute = {
    createjob : backend_url + "/api/createjob",
    getjob : backend_url + "/api/getjob",
    getJobById: backend_url + "/api/getJobById",
    getJobsPostedByUser : backend_url + "/api/jobs/my-posts",
}