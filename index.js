"use strict";       // "Be tolerant with others, and strict with yourself." - Marcus Aurelius


// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
let preferenceChoice = userPreference==='Sugar-free' ? 'Sugar-free': 'Regular';
console.log("User's Preference:", userPreference);
console.log("What we heard:", preferenceChoice);
console.log("\n")



// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let stockAction = cansLeft >= 5 ? "We're stocked!" : "Time to restock!";
console.log("Cans Left", cansLeft);
console.log("Action:", stockAction);
console.log("\n")



// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
let drinkRecommendation = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log("User's heartrate", heartRate);
console.log("Our recommendation:", drinkRecommendation);
console.log("\n")



// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let serveAction = currentTemp > 5 ? "Needs a cooler!" : "Chilled to perfection!";
console.log("Current temp:", currentTemp);
console.log("Is it ready to serve:", serveAction);
console.log("\n")



// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22;

// Note: in 24-hour format, 23 is the highest hour.
//   Because midnight is 0 (zero) and is the upper limit to this check,
//   we only have to check if its earlier than 7am.
currentHour > 23 ? console.log("Invalid hour for 24-hour format") : null;

//   (Note to admin: if you want to make this "complicated", you should choose a time like 7am - 10pm)
let drinkAction = currentHour < 7 ? "Better stick to water." : "Unleash the beast!";
console.log("Current hour:", currentHour);
console.log("Should we drink:", drinkAction);
console.log("\n")



// Lets try a harder one
// Check this out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#conditional_chains
console.log("Hard Mode:")

// No caffeine before 8am. May have before 12pm. Nothing again till 3pm. Ok until 7pm. No more than 2 per day.
let currentTime = 13;
let totalDrinks = 1;
let hydrateStrategy = totalDrinks >= 2 ? "Better stick to water." :
                      (currentTime > 8 && currentTime < 12) ? "Unleash the beast!" :
                      (currentTime > 15 && currentTime < 19) ? "Unleash the beast!" :
                      "Better stick to water."

// The time condition can be "simplified" to:
// (currentTime > 8 && currentTime < 12) || (currentTime > 15 && currentTime < 19) ? "Unleash the beast!" : "Better stick to water."

console.log("Current hour:", currentTime);
console.log("Total drinks today:", totalDrinks);
console.log("Hydration tactic:", hydrateStrategy, "\n\n");
