// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
let preferenceChoice = userPreference==='Sugar-free' ? 'Sugar-free': 'Regular';
console.log("User's Preference:", userPreference);
console.log("What we heard:", preferenceChoice, "\n\n");

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let stockAction = cansLeft >= 5 ? "We're stocked!" : "Time to restock!";
console.log("Cans Left", cansLeft);
console.log("Action:", stockAction, "\n\n");


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
let drinkRecommendation = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log("User's heartrate", heartRate);
console.log("Our recommendation:", drinkRecommendation, "\n\n");


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let serveAction = currentTemp > 5 ? "Needs a cooler!" : "Chilled to perfection!";
console.log("Current temp:", currentTemp);
console.log("Is it ready to serve:", serveAction, "\n\n");


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22;

// Note: in 24-hour format, 23 is the highest hour.
//   Because midnight is 0 (zero) and is the upper limit to this check,
//   we only have to check if its earlier than 7am.
//
//   (Note to admin: if you want to make this "complicated", you should choose a time like 7am - 10pm)
currentHour > 23 ? console.log("Invalid hour for 24-hour format") : null;

let drinkAction = currentHour < 7 ? "Better stick to water." : "Unleash the beast!";
console.log("Current hour:", currentHour);
console.log("Should we drink:", drinkAction, "\n\n");


// Wish there was some complex ones.
// Check this out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#conditional_chains
