const express = require("express");
const router = express.Router();
const {createJob} = require("../controllers/jobs")
const {getJobs, getJobById,getJobsPostedByUser} = require("../controllers/jobs")
const authenticate = require("../middleware/authmiddleware")


router.post("/createjob", createJob);
router.get("/getjob", getJobs)
router.post("/getJobById", getJobById)
router.post('/jobs/my-posts',authenticate, getJobsPostedByUser);

module.exports = router;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTIyNTBkM2RlZWIyMTI2MDI1MDY0NyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNDA3NjU4MX0.bmqlGn-5etwMJ_x-qOgni_SwPLObjuN3C5tQWhSiLg4