/**
 * Task 10: Create a Band Name Generator
 */

// 1. Declare a function named generateBandName that takes two arguments: clothingColor and lastFoodEaten.
// 2. In the function, declare a variable named bandName and assign it to an initial value of an empty string.
// 3. Using string concatenation, assign bandName to the string "The " plus the clothingColor and lastFoodEaten variables.
// 4. Ensure the first letter of each word is capitalized.
// 5. Return the bandName variable.

function generateBandName(clothingColor, lastFoodEaten) {
  // Function to capitalize the first letter of a word if it exists
  function capitalize(word) {
    if (!word && word !== 0) return "";
    const str = String(word);
    const cleanWord = str.trim().toLowerCase();
    return cleanWord
      ? cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1)
      : "";
  }

  // Construct the band name, handling null and empty values
  return "The " + capitalize(clothingColor) + " " + capitalize(lastFoodEaten);
}

console.log(generateBandName("red", "apple"));
