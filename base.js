const dropFirst = xs => xs.slice(1) 
const merge     = o1 => o2 => Object.assign({}, o1, o2) 
const rnd       = min => max => Math.floor(Math.random() * max) + min
const mod       = x => y => y < 0 ? (x - 1) : (y > (x - 1) ? 0 : y) 

module.exports = { dropFirst, merge, mod, rnd}
