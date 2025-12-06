const express = require("express");
const cors = require("cors");
const app = express();
const jobRoutes = require("./routes/jobs");

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
