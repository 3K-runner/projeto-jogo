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
const willCrash = state => (state.ghosts.some(pointEq(nextHead(state)))) || (state.ghosts.some(pointEq(state.snake[0])))
const avoidMaze = state => WALLS.some(pointEq(nextHead(state))) ? false : true
const avoidMazeB = state => i => peck => WALLS.some(pointEq(nextBeak(state)(i)(peck))) ? false : true


const notOpositeMove = state => i=> peck =>
  (state.pecks[i].x + peck.x != 0) || (state.pecks[i].y + peck.y !=0)

const nextMoves = state => (state.moves.length > 1) ? dropFirst(state.moves) : state.moves

const nextPeck1 = state => STOP
const nextPeck2 = state => STOP
const nextPeck3 = state => STOP
const nextPeck4 = state => {
  const optionsPeck1 = [NORTH, WEST, SOUTH, EAST]
  const optionsPeck2 = [...optionsPeck1].filter(p => notOpositeMove(state)(3)(p))
  const optionsPeck3 = [...optionsPeck2].filter(p => avoidMazeB(state)(3)(p))

  const target1 = nextHead(state)
  const target2 = state.ghosts[0]
  const target3 = ({x: (2 * target1.x - target2.x),
                    y: (2 * target1.y - target2.y)
  })

  const optionsPeck4 = orderMoves([...optionsPeck3])(target3)(state.ghost[0])

  return optionsPeck4[0];
}

const nextPecks = state => [nextPeck1(state),
                   nextPeck2(state),
                   nextPeck3(state),
                   nextPeck4(state)]

const nextApple = state => state.apple.filter(wontEat(state))

const nextHead  = state => ({
      x: mod(state.cols)(state.snake[0].x + state.moves[0].x),
      y: mod(state.rows)(state.snake[0].y + state.moves[0].y)
    })

const nextBeak  = state => i => move => ({
      x: mod(state.cols)(state.ghosts[i].x + move.x),
      y: mod(state.rows)(state.ghosts[i].y + move.y)
    })

const nextSnake = state => willCrash(state)
   ? [] 
   : (avoidMaze(state) 
     // Stops the snake when facing a wall
      ? [nextHead(state)] 
      : state.snake) 

const nextGhost = state => i => nextBeak(state)(i)(state.pecks[i]);

const nextBirds = state => [nextGhost(state)(0), 
                            nextGhost(state)(1),
                            nextGhost(state)(2),
                            nextGhost(state)(3)]
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
  pecks: [STOP, STOP, STOP, STOP],
  ghosts: STARTBIRDS
})

// Bird eats snake state
const eatenState = state => ({
  cols:  20,
  rows:  14,
  moves: [STOP], 
  snake: [START],
  apple: state.apple,
  pecks: [STOP, STOP, STOP, STOP],
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
      pecks: nextPecks(state),
      ghosts: nextBirds(state)
}))

const enqueue = (state, move) => (state.moves.length < 4) ? merge(state)({ moves: state.moves.concat([move]) })
  : state

module.exports = { EAST, NORTH, SOUTH, WEST, WALLS, initialState, enqueue, next, }
