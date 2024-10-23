// API response can contain duplicate facts
// Modify this code so that response does not return duplicate facts

import express from "express";
import { data } from "./ch5_facts.js";

const app = express();
app.set("port", process.env.PORT || 3000);

const numFacts = data.length;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/api/facts", (req, res) => {
  console.log(req.query); // display parsed querystring object
  console.log(req.query.number);
  const number = parseInt(req.query.number, 10);

  const factsArray = [];
  let foundDouble = false;
  let original,
    copy = 0;
  for (let i = 0; i < number; i++) {
    const facts_index = getRandomInt(numFacts);
    factsArray.push(data[facts_index]);
    if (!foundDouble) {
      for (let j = 0; j < i; j++) {
        if (factsArray[j] == factsArray[i]) {
          foundDouble = true;
          original = j;
          copy = i;
        }
      }
    }
  }

  res.type("json");
  res.status(200);
  res.json({
    facts: factsArray,
    success: true,
    found_double: foundDouble,
    original_index: original,
    copy_index: copy,
  });
});

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not found");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});
