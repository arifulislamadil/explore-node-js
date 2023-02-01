const os = require("os");
// console.log(os.hostname())
// console.log(os.freemem())
// console.log(os.userInfo())
// console.log(os.version())
// console.log(os.homedir());

var free_memory = os.freemem();
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;
var free_mem_in_gb = free_mem_in_mb/1024;

console.log(free_mem_in_gb);