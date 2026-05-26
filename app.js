const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Jenkins Docker CI/CD project by sachin pareta how are you!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "nodejs-jenkins-docker-demo"
  });   
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});