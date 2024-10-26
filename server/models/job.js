const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    designation: { type: String, required: true },
    type: { type: String, required: true }, 
    salary: { type: String, required: true }, 
    location: { type: String, required: true }, 
    company: { type: String, required: true }, 
    description: { type: String, required: true },
    requirements: [{ type: String, required: true }],  
    desirable: [{ type: String }],  
    benefits: [{ type: String }],  
    jobBenefits: [{ type: String }], 
    posted: { type: Date, default: Date.now }, 
    expires: { type: Date, required: true }, 
    experienceLevel: { type: String, required: true }, 
    education: { type: String }, 
    tags: [{ type: String }]  ,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job; 
