function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; // Export the function for use in other files

if (require.main === module) {
  console.log(greet("World"));
}
