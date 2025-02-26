import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("FactsData")); // change based on data
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/facts", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const fileContent = await fs.readFile("./portfolio-models.ts");

  const factsData = JSON.parse(fileContent);

  res.status(200).json({ facts: factsData });
});