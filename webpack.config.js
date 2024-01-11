const path = require("path");

module.exports = {
  entry: "./src/index.js", // index.js is where logic is
  output: {
    filename: "main.js", // write to main.js
    path: path.resolve(__dirname, "dist"),
  },
};
