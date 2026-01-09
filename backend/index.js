import "dotenv/config"; 

import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("OK");
});


app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});