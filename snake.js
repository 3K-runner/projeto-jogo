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
const WALLS  = [{ x:0, y: 1}]
const FRUITS = [{ x:16, y: 2}]
const START  = {x:2, y:2} // Starting position
const STARTBIRDS = [{ x:16, y: 4 }, 
                    { x:16, y: 6 }, 
                    { x:16, y: 8 },
                    { x:16, y:10 }]

// Point operations
const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y 

// Booleans
const wontEat   = state => p => pointEq(nextHead(state))(p) ? false : true
const willCrash = (state) => state.ghosts.some(pointEq(nextHead(state)))
const avoidMaze = state => WALLS.some(pointEq(nextHead(state))) ? false : true

const validMove = move => state =>
  (state.moves[0].x + move.x != 0) || (state.moves[0].y + move.y !=0)

const nextMoves = state => (state.moves.length > 1) ? dropFirst(state.moves) : state.moves
  
const nextApple = state => state.apple.filter(wontEat(state))

const nextHead  = state => ({
      x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
      y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
    })

const nextSnake = state => willCrash(state)
   ? [] 
   : (avoidMaze(state) 
     // Stops the snake when facing a wall
      ? [nextHead(state)] 
      : state.snake) 

const nextGhost1 = state => state.ghosts[0];
const nextGhost2 = state => state.ghosts[1];
const nextGhost3 = state => state.ghosts[2];
const nextGhost4 = state => state.ghosts[3];

const nextBirds = state => [nextGhost1(state), 
                            nextGhost2(state),
                            nextGhost3(state),
                            nextGhost4(state)]
// Randomness
const rndPos = table => ({
  x: rnd(0)(table.cols - 1),
  y: rnd(0)(table.rows - 1)
})

// Initial state
const initialState = () => ({
  cols:  20,
  rows:  14,
  moves: [STOP], 
  snake: [START],
  apple: FRUITS,
  ghosts: STARTBIRDS
})

// Bird eats snake state
const eatenState = state => ({
  cols:  20,
  rows:  14,
  moves: [STOP], 
  snake: [START],
  apple: state.apple,
  ghosts: STARTBIRDS
})

const next = state => state.snake.length == 0 
   ? eatenState(state)
   : (state.apple.length == 0
      ? initialState()
      : ({
      cols:  20,
      rows:  14,
      moves: nextMoves(state),
      snake: nextSnake(state),
      apple: nextApple(state),
      ghosts: nextBirds(state)
}))

const enqueue = (state, move) => (state.moves.length < 4) ? merge(state)({ moves: state.moves.concat([move]) })
  : state

module.exports = { EAST, NORTH, SOUTH, WEST, WALLS, initialState, enqueue, next, }
