// Array of marks
const marks = [85, 92, 78, 95, 88];

// Initialize the highest marks variable with the first element of the array
let highestMarks = marks[0];

// Iterate through the array to find the highest marks
for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}

// Display the highest marks
console.log("The highest marks scored by a student is: " + highestMarks);
