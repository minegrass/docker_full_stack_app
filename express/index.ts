import express from "express";

const app = express();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3001;

app.get("/", (req, res) => {
  res.send("OK!");
});

app.listen(EXPRESS_PORT, () => {
  console.log(`listening to ${EXPRESS_PORT}`);
});
