const base = require('./base')
Object.getOwnPropertyNames(base).map(p => global[p] = base[p])

// Constants 
// movement 
const NORTH = { x: 0, y:-1 } 
const SOUTH = { x: 0, y: 1 } 
const EAST  = { x: 1, y: 0 } 
const WEST  = { x:-1, y: 0 }
const STOP  = { x: 0, y: 0 } // Move Stop
// position
const WALLS = [{ x:0, y: 1},]
const START = {x:2, y:2} // Starting position

// Point operations
const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y 

// Booleans
const willEat   = state => pointEq(nextHead(state))(state.apple)
const willCrash = state => state.snake.find(pointEq(nextHead(state)))
const avoidMaze = state => WALLS.find(pointEq(nextHead(state))) ? false : true

const validMove = move => state =>
  (state.moves[0].x + move.x != 0) || (state.moves[0].y + move.y !=0)

const nextMoves = state => (state.moves.length > 1) ? dropFirst(state.moves) : state.moves
  
const nextApple = state => willEat(state) ? rndPos(state) : state.apple

const nextHead  = state => ({
      x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
      y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
    })

const nextSnake = state => willCrash(state)
   ? [START] 
   : (avoidMaze(state) 
     // Stops the snake when facing a wall
      ? [nextHead(state)] 
      : state.snake) 

const nextGhost1 = (state) => willCrash(state) ? fixPos(state) : state.ghosts[0];
const nextGhost2 = (state) => willCrash(state) ? fixPos(state) : state.ghosts[1];
const nextGhost3 = (state) => willCrash(state) ? fixPos(state) : state.ghosts[2];
const nextGhost4 = (state) => willCrash(state) ? fixPos(state) : state.ghosts[3];

// Randomness
const rndPos = table => ({
  x: rnd(0)(table.cols - 1),
  y: rnd(0)(table.rows - 1)
})

// Fixed position 
const fixPos = table => ({
  x: table.ghosts[ghostIndex].x,
  y: table.ghosts[ghostIndex].y
})

// Initial state
const initialState = () => ({
  cols:  20,
  rows:  14,
  moves: [STOP], 
  snake: [START],
  apple: { x: 16, y: 2 },
})

const next = state => (state.snake.length == 0) 
   ? initialState()
   : ({
      cols:  20,
      rows:  14,
      moves: nextMoves(state),
      snake: nextSnake(state),
      apple: nextApple(state)
})

const enqueue = (state, move) => (state.moves.length < 4) ? merge(state)({ moves: state.moves.concat([move]) })
  : state

module.exports = { EAST, NORTH, SOUTH, WEST, WALLS, initialState, enqueue, next, }
