import express from "express";
import cors from "cors";
const app = express();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/data", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(EXPRESS_PORT as number, () => {
  console.log(`listening to ${EXPRESS_PORT}`);
});
