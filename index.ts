import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  console.log("Someone pinged root");
  res.send("pong");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
