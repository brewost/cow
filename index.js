const info = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${info.name} and I'm from ${info.campus}`,
}));
