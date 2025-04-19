const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  return res.status(200).json({ message: "Health OK" });
});
app.get("/api/home", (req, res) => {
  return res
    .status(200)
    .send(`<h1>Welcome to the deployed app!!! With ACTIONS!!!</h1`);
});
app.listen(8000, () => console.log("Server Running"));
