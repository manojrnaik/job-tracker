const API_URL = "http://localhost:5000/api/jobs";

// Fetch and display jobs
async function loadJobs() {
  const res = await fetch(API_URL);
  const jobs = await res.json();

  const container = document.getElementById("jobs");
  container.innerHTML = "";

  jobs.forEach((job) => {
    container.innerHTML += `
      <div class="job-card">
        <h3>${job.title} - ${job.company}</h3>
        <p>Status: ${job.status}</p>
        <p>Notes: ${job.notes}</p>
        <button onclick="deleteJob(${job.id})">Delete</button>
      </div>
    `;
  });
}

// Add job
async function addJob() {
  const job = {
    title: document.getElementById("title").value,
    company: document.getElementById("company").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  });

  loadJobs();
}

// Delete job
async function deleteJob(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadJobs();
}

// initial load
loadJobs();
