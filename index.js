const express = require("express");
const cronJob = require("../cron-job-demo/src/api/cron-job");

const app = express();

app.use("/cron", cronJob);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
