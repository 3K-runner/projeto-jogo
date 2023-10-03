const dropFirst = xs => xs.slice(1) 
const merge     = o1 => o2 => Object.assign({}, o1, o2) 
const rnd       = min => max => Math.floor(Math.random() * max) + min
const mod       = x => y => y < 0 ? (x - 1) : (y > (x - 1) ? 0 : y) 
//Calculates the distance between two given dots
const distance  = (p1) =>  (p2) => Math.trunc(Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2))
// Finds the smallest distance in relation to the ghosts
const orderMoves = (moves) => (ghostPosition) => (snakePosition) => {
  
  // Possible directions
  const distances = moves.map((move) => {
    switch (move) {
      case "NORTH":
        return distance(ghostPosition)({ x: snakePosition.x, y: snakePosition.y - 1 });
      case "SOUTH":
        return distance(ghostPosition)({ x: snakePosition.x, y: snakePosition.y + 1 });
      case "WEST":
        return distance(ghostPosition)({ x: snakePosition.x + 1, y: snakePosition.y });
      case "EAST":
        return distance(ghostPosition)({ x: snakePosition.x - 1, y: snakePosition.y });
      default:
    }
  })

  // Ordered directions
 const movementInOrder = [...moves].sort((a, b) => distances[moves.indexOf(a)] - distances[moves.indexOf(b)])

  return movementInOrder;
}

module.exports = { dropFirst, merge, mod, rnd,distance,orderMoves}
