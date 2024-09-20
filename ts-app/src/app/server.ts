import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: `Hello from Typescript Server`,
  });
});

export default app;
