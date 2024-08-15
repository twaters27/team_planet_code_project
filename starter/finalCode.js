const prompt = require("prompt-sync");

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

    case "weight":
      measurement = "kg";
      break;

    default:
      measurement = "units";
      break;
  }
  for (let planet in gravityFactors) {
    console.log(
      "Your",
      `${type}`,
      "on",
      `${planet}`,
      "is",
      `${results[planet]}`,
      `${measurement}`
    );
  }
}

global.showUserFactors = showUserFactors;
