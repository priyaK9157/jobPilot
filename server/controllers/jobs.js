const Job = require("../models/job");
const Auth = require("../middleware/authmiddleware")

// Create a new job
exports.createJob = async (req, res) => {
  try {
    // Destructure the job details from the request body
    const {
      designation,
      type,
      salary,
      location,
      company,
      description,
      requirements,
      desirable,
      benefits,
      experienceLevel,
      education,
      tags,
      expires,
      jobBenefits, // Adding jobBenefits
    } = req.body;

    console.log("first", designation,
      type,
      salary,
      location,
      company,
      description,
      requirements,
      desirable,
      benefits,
      experienceLevel,
      education,
      tags,
      expires,
      jobBenefits // Log for debugging
    );

    // Input validation
    if (!designation || !type || !salary || !location || !company || !description || !requirements || !experienceLevel || !expires) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    // Create a new Job instance with current date as datePosted
    const newJob = new Job({
      designation,
      type,
      salary,
      location,
      company,
      description,
      requirements,
      desirable,
      benefits,
      experienceLevel,
      education,
      tags,
      expires,
      jobBenefits, // Storing job benefits
      datePosted: new Date(), // Automatically set to current date
    });

    // Save the job to the database
    const savedJob = await newJob.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: savedJob,
    });
  } catch (error) {
    console.error("Error creating job:", error); // Log the error for debugging
    return res.status(500).json({
      success: false,
      message: "Error creating job",
      error: error.message,
    });
  }
};

exports.getJobsPostedByUser = async (req, res) => {
  try {
    const userId = req.user.id; // Extracting user ID from req.user

    const jobs = await Job.find({ userId });

    return res.status(200).json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.error('Error fetching jobs posted by user:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching jobs',
      error: error.message,
    });
  }
};

// Fetch all jobs
exports.getJobs = async (req, res) => {

  console.log("hii")
  try {
    const jobs = await Job.find({});
    return res.status(200).json({
      success: true,
      message: "Jobs fetched successfully!",
      data: jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching jobs",
      error: error.message,
    });
  }
};

// Fetch a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const { JobId } = req.body;  // Accessing JobId from req.body
    const job = await Job.findById(JobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job fetched successfully!",
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching job",
      error: error.message,
    });
  }
};
