const dotenv = require("dotenv");
const { writeFile } = require("fs");

const envExample = ".env.example";

// https://www.npmjs.com/package/dotenv
const result = dotenv.config();

const vars = result.parsed;
const keys = Object.keys(vars)
  .map((k) => `${k}=\n`)
  .join("");

// https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback
writeFile(envExample, keys, (err) => {
  if (err) throw err;
  console.log(`${envExample} has been saved!`);
});
