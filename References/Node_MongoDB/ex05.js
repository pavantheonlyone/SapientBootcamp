const os = require('os');
const slugify = require('slugify');

const str = 'This is an example node.js code by Pavan (vinod@vinod.co)';
console.log(slugify(str));
console.log('type of slugify ',typeof slugify);
console.log('type of os is ', typeof os);
console.log('current os architecture is ',os.arch);
const cpus = os.cpus();
//console.log(cpus);