const prompt = require("prompt-sync")();

const gravityFactors = require("./utils/earthGravityFactors.js");
const alienFactors = require("./utils/alienGravityFactors.js");

function showUserFactors(
  type,
  //   userMeasurement,
  planet,
  system,
  value,
  measurement
) {
  console.log(value);
  let results = {};
  let alienResults = {};

  // let measurement;
  if (planet === "earth") {
    for (let planet in gravityFactors) {
      results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }
  } else if (planet === "alien") {
    for (let planet in alienFactors) {
      alienResults[planet] = parseFloat(
        (alienFactors[planet] * value).toFixed(2)
      );
    }
  }

  // switch (type) {

  //   case "jump":
  //     measurement = "cm";
  //     break;

  //   case "weight":
  //     measurement = "kg";
  //     break;

  //   default:
  //     measurement = "units";
  //     break;
  // }
  if (planet === "alien") {
    for (let planet in alienFactors) {
      console.log(
        `Your ${type} on ${planet} is ${alienResults[planet]} ${measurement}`
      );
    }
  } else if (planet === "earth") {
    for (let planet in gravityFactors) {
      console.log(
        `Your ${type} on ${planet} is ${results[planet]} ${measurement}`
      );
    }
  }
}

function getUserInput() {
  //   console.log("pushup, jump or weight?");
  //   let userType = prompt(">>").trim().toLowerCase();
  //   //   console.log("Which measurement? cm or kg, put reps if you choose pushups");
  //   //   let userMeasurement = prompt(">>").trim().toLowerCase();
  //   console.log("Which solar system do you want? alien or earth?");
  //   let userPlanet = prompt(">>").trim().toLowerCase();
  //   console.log("metric or imperial");
  //   let userSystem = prompt(">> ").trim().toLowerCase();
  //   console.log("How much of the measurement? Please enter a number.");
  //   let userValue = prompt(">> ").trim().toLowerCase();
  //   //   let isTrue = true;
  let userType;
  let userPlanet;
  let userSystem = "reps";
  let userValue;
  let userMeasurement = "reps";
  typeLoop: while (true) {
    userType = prompt("Please select either weight, jump or pushups. >>")
      .trim()
      .toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userType == vaildWords[i]) {
        break typeLoop;
      }
    }
    console.log("try again");
  }
  if (userType === "pushups") {
  }
  planetLoop: while (true) {
    userPlanet = prompt("Please select earth or alien. >>")
      .trim()
      .toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userPlanet == vaildWords[i]) {
        break planetLoop;
      }
    }
    console.log("try again");
  }
  systemLoop: while (true) {
    userSystem = prompt("Please select metric or imperial. >>")
      .trim()
      .toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userSystem == vaildWords[i]) {
        break systemLoop;
      }
    }
    console.log("try again");
  }
  while (true) {
    userValue = prompt(
      "Please enter a value in the form of a number. >>"
    ).trim();

    if (!isNaN(userValue) && 1000 > userValue > 0) {
      break;
    }
  }

  if (userSystem === "metric") {
    if (userType === "jump") {
      userMeasurement = "cm";
    }
    if (userType === "weight") {
      userMeasurement = "kg";
    }
  }
  if (userSystem === "imperial") {
    if (userType === "jump") {
      userMeasurement = "in";
    }
    if (userType === "weight") {
      userMeasurement = "lb";
    }
  }
  showUserFactors(userType, userPlanet, userSystem, userValue, userMeasurement);
}

global.getUserInput = getUserInput;

global.showUserFactors = showUserFactors;

let vaildWords = [
  "pushups",
  "jump",
  "weight",
  "cm",
  "kg",
  "reps",
  "alien",
  "earth",
  "metric",
  "imperial",
];
