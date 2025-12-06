const jobs = require("../data/jobs.json");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/jobs.json");

// READ — Get all jobs
const getJobs = (req, res) => {
  res.json(jobs);
};

// CREATE — Add new job
const addJob = (req, res) => {
  const newJob = { id: Date.now(), ...req.body };
  jobs.push(newJob);

  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));
  res.json({ message: "Job added", job: newJob });
};

// UPDATE — Update job info
const updateJob = (req, res) => {
  const id = parseInt(req.params.id);
  const index = jobs.findIndex((job) => job.id === id);

  if (index === -1) return res.status(404).json({ message: "Job not found" });

  jobs[index] = { ...jobs[index], ...req.body };

  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));
  res.json({ message: "Job updated", job: jobs[index] });
};

// DELETE — Remove a job
const deleteJob = (req, res) => {
  const id = parseInt(req.params.id);
  const filtered = jobs.filter((job) => job.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
  res.json({ message: "Job deleted" });
};

module.exports = { getJobs, addJob, updateJob, deleteJob };
