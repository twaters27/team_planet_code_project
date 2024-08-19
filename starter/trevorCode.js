const prompt = require("prompt-sync")();

const gravityFactors = require("./utils/earthGravityFactors.js");
const alienFactors = require("./utils/alienGravityFactors.js");

function showUserFactors(
  type,
  //   userMeasurement,
  planet,
  system,
  value
) {
  let results = {};
  let alienResults = {};

  let measurement;
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
    console.log(`Your ${type} on ${planet} is ${planet[planet]} ${system}`);
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
  let userSystem;
  let userValue;
  typeLoop: while (true) {
    userType = prompt("Please select either weight, jump or pushups")
      .trim()
      .toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userType == vaildWords[i]) {
        break typeLoop;
      } else {
        console.error("try again");
      }
    }
  }
  planetLoop: while (true) {
    userPlanet = prompt("Please select earth or alien").trim().toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userPlanet == vaildWords[i]) {
        break planetLoop;
      } else {
        console.error("try again");
      }
    }
  }
  systemLoop: while (true) {
    userSystem = prompt("Please select metric or imperial")
      .trim()
      .toLowerCase();
    for (var i = 0; i < vaildWords.length; i++) {
      if (userSystem == vaildWords[i]) {
        break systemLoop;
      } else {
        console.error("try again;");
      }
    }
  }
  while (true) {
    userValue = prompt("Please enter a value in the form of a number.")
      .trim()
      .toLowerCase();
    break;
  }
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
