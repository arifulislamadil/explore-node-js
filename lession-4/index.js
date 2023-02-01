// const { dirname } = require("path");
// console.log(__dirname)
// console.log(__filename)

const p = require("path");
const ext = p.extname("index.js");
const join = p.join(__dirname + "/view")
console.log(join)
