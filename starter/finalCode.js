const prompt = require("prompt-sync")();

const gravityFactors = require("./utils/earthGravityFactors.js");
const alienFactors = require("./utils/alienGravityFactors.js");

function showUserFactors(
  userType,
  //   userMeasurement,
  userPlanet,
  userSystem,
  userValue
) {
  let results = {};
  let alienResults = {};

  let measurement;

  for (let planet in gravityFactors) {
    results[planet] = parseFloat(
      (gravityFactors[planet] * userValue).toFixed(2)
    );
  }
  for (let planet in alienFactors) {
    alienResults[planet] = parseFloat(
      (alienFactors[planet] * userValue).toFixed(2)
    );
  }
  switch (userType) {
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
      `Your ${userType} on ${userPlanet} is ${userPlanet[planet]} ${userMeasurement}`
    );
  }
}

function getUserInput() {
  console.log("pushup, jump or weight?");
  let userType = prompt(">>").trim().toLowerCase();
  //   console.log("Which measurement? cm or kg, put reps if you choose pushups");
  //   let userMeasurement = prompt(">>").trim().toLowerCase();
  console.log("Which solar system do you want? alien or earth?");
  let userPlanet = prompt(">>").trim().toLowerCase();
  console.log("metric or imperial");
  let userSystem = prompt(">> ").trim().toLowerCase();
  console.log("How much of the measurement? Please enter a number.");
  let userValue = prompt(">> ").trim().toLowerCase();
  //   let isTrue = true;
}
showUserFactors(userType, userPlanet, userSystem, userValue);

global.getUserInput = getUserInput;

global.showUserFactors = showUserFactors;

let vaildWords = [
  "pushup",
  "weight",
  "cm",
  "kg",
  "reps",
  "alien",
  "earth",
  "metric",
  "imperial",
];
