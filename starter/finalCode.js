const prompt = require("prompt-sync")();

const gravityFactors = require("./utils/earthGravityFactors.js");
const alienFactors = require("./utils/alienGravityFactors.js");

function showUserFactors(system, type, value) {
  let results = {};
  let alienResults = {};

  let measurement;

  for (let planet in gravityFactors) {
    results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
  }
  for (let planet in alienFactors) {
    alienResults[planet] = parseFloat(
      (alienFactors[planet] * value).toFixed(2)
    );
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
      `Your ${type} on ${planet} is ${results[planet]} ${measurement}`
    );
  }
}

function getUserInput() {
  console.log("Which solar system do you want? 1 or 2?");
  let userPlanet = prompt(">>");
  console.log("Enter Type");
  let userType = prompt(">> ");
  console.log("Enter Value");
  let userValue = prompt(">> ");

  showUserFactors(userPlanet, userType, userValue);
}
global.getUserInput = getUserInput;

global.showUserFactors = showUserFactors;
