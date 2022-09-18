let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(`${os.cpus().length} Core`)
console.log(os.freemem())
console.log(os.uptime())
console.log(os.userInfo())