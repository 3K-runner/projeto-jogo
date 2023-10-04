const dropFirst = xs => xs.slice(1) 
const merge     = o1 => o2 => Object.assign({}, o1, o2) 
const rnd       = min => max => Math.floor(Math.random() * max) + min
const mod       = x => y => y < 0 ? (x - 1) : (y > (x - 1) ? 0 : y) 
//Calculates the distance between two given dots
const distance  = (p1) =>  (p2) => Math.trunc((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
// Finds the smallest distance in relation to the birds
const orderMoves = (moves) => (birdPosition) => (snakePosition) => {
  
  // Possible directions
  const distances = moves.map((move) => distance(birdPosition)({ x: snakePosition.x + move.x, y: snakePosition.y + move.y}))

  // Ordered directions
 const movementInOrder = [...moves].sort((a, b) => distances[moves.indexOf(a)] - distances[moves.indexOf(b)])

  return movementInOrder;
}

module.exports = { dropFirst, merge, mod, rnd,distance,orderMoves}
