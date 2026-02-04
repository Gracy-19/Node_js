const path = require("path");
let filePath = "C:/Users/Gracy/Desktop/nodejs/index.js";
console.log("✅ Original Path:", filePath);

console.log("basename:", path.basename(filePath));
console.log("basename without extension:", path.basename(filePath, ".js"));

console.log("delimiter:", path.delimiter);

console.log("dirname:", path.dirname(filePath));

console.log("extname:", path.extname(filePath));

let obj = {
  dir: "C:/Users/Gracy/Desktop/nodejs",
  base: "app.js"
};
console.log("format:", path.format(obj));

console.log("matchesGlob:", path.matchesGlob("index.js", "*.js"));

console.log("isAbsolute:", path.isAbsolute(filePath));

console.log("join:", path.join("folder", "subfolder", "file.txt"));

console.log("normalize:", path.normalize("folder//subfolder///file.txt"));

console.log("parse:", path.parse(filePath));

console.log("relative:", path.relative("C:/Users/Gracy", filePath));

console.log("resolve:", path.resolve("folder", "file.txt"));

console.log("sep:", path.sep);

console.log("toNamespacedPath:", path.toNamespacedPath(filePath));

console.log("posix join:", path.posix.join("folder", "file.txt"));

console.log("win32 join:", path.win32.join("folder", "file.txt"));
