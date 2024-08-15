const prompt = require("node-sync")();

const gravityFactors = require("./utils/earthGravityFactors.js");

function showUserFactors(type, value) {
  let results = {};

  let measurement;

  for (let planet in gravityFactors) {
    results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
  }
  switch (type) {
    case "jump":
      measurement = "cm";
      break;
    
    default:
      measurement
  }
}
