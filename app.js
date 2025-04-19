const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/api/health", (req, res) => {
  return res.status(200).json({ message: "Health OK" });
});
app.get("/api/home", (req, res) => {
  return res
    .status(200)
    .send(`<h1>Welcome to the deployed app!!! With ACTIONS!!!!</h1`);
});

app.get("/api/home", (req, res) => {
  return res
    .status(200)
    .send(`<h1>Welcome to the deployed app!!! With ACTIONS!!!</h1`);
});

app.get("/api/test", (req, res) => {
  return res.status(200).send(`<h1>Tested after git commit</h1`);
});
app.get("/api/user", (req, res) => {
  return res.status(200).json({ name: process.env.NAME });
});
app.listen(process.env.PORT, () =>
  console.log("Server Running at ", process.env.PORT)
);
