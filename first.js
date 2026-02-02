// taking input from user
const readline = require("readline");
const fs = require("fs"); // declare fs only ONCE

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello " + name);

  // create a file
  fs.writeFileSync("hello.txt", "Hello from Node.js!");
  console.log("File created successfully!");

  // read the file
  let data = fs.readFileSync("hello.txt", "utf-8");
  console.log("File Content:\n", data);

  rl.close();
});
