// Get command-line arguments from index 2
const args = process.argv.slice(2);

// Convert first argument to integer
const num = parseInt(args[0]);

// Check if it's a valid number (not NaN)
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}