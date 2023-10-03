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
const WALLS  = [{ x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
                { x: 6, y: 0 },
                { x: 7, y: 0 },
                { x: 8, y: 0 },
                { x: 9, y: 0 },
                { x:10, y: 0 },
                { x:11, y: 0 },
                { x:12, y: 0 },
                { x:13, y: 0 },
                { x:14, y: 0 },
                { x:15, y: 0 },
                { x:16, y: 0 },
                { x:17, y: 0 },
                { x:18, y: 0 },
                { x:19, y: 0 },
                
                { x: 0, y: 1 },
                { x:19, y: 1 },
                
                { x: 0, y: 2 },
                { x: 2, y: 2 },
                { x: 3, y: 2 },
                { x: 5, y: 2 },
                { x: 8, y: 2 },
                { x: 9, y: 2 },
                { x:10, y: 2 },
                { x:11, y: 2 },
                { x:14, y: 2 },
                { x:16, y: 2 },
                { x:17, y: 2 },
                { x:19, y: 2 },
                
                { x: 0, y: 3 },
                { x: 2, y: 3 },
                { x: 3, y: 3 },
                { x: 5, y: 3 },
                { x: 6, y: 3 },
                { x: 9, y: 3 },
                { x:10, y: 3 },
                { x:13, y: 3 },
                { x:14, y: 3 },
                { x:16, y: 3 },
                { x:17, y: 3 },
                { x:19, y: 3 },
                 
                { x: 0, y: 4 },
                { x: 5, y: 4 },
                { x:14, y: 4 },
                { x:19, y: 4 },
                
                { x: 0, y: 5 },
                { x: 1, y: 5 },
                { x: 2, y: 5 },
                { x: 3, y: 5 },
                { x: 5, y: 5 },
                { x: 7, y: 5 },
                { x: 8, y: 5 },
                { x:11, y: 5 },
                { x:12, y: 5 },
                { x:14, y: 5 },
                { x:16, y: 5 },
                { x:17, y: 5 },
                { x:18, y: 5 },
                { x:19, y: 5 },
                 
                { x: 7, y: 6 },
                { x:12, y: 6 },
                
                { x: 0, y: 7 },
                { x: 2, y: 7 },
                { x: 3, y: 7 },
                { x: 5, y: 7 },
                { x: 7, y: 7 },
                { x: 8, y: 7 },
                { x: 9, y: 7 },
                { x:10, y: 7 },
                { x:11, y: 7 },
                { x:12, y: 7 },
                { x:14, y: 7 },
                { x:16, y: 7 },
                { x:17, y: 7 },
                { x:19, y: 7 },
                
                { x: 0, y: 8 },
                { x:19, y: 8 },
                
                { x: 0, y: 9 },
                { x: 1, y: 9 },
                { x: 3, y: 9 },
                { x: 5, y: 9 },
                { x: 7, y: 9 },
                { x: 8, y: 9 },
                { x: 9, y: 9 },
                { x:10, y: 9 },
                { x:11, y: 9 },
                { x:12, y: 9 },
                { x:14, y: 9 },
                { x:16, y: 9 },
                { x:18, y: 9 },
                { x:19, y: 9 },
                
                { x: 0, y:10 },
                { x: 5, y:10 },
                { x: 9, y:10 },
                { x:10, y:10 },
                { x:14, y:10 },
                { x:19, y:10 },
                
                { x: 0, y:11 },
                { x: 2, y:11 },
                { x: 3, y:11 },
                { x: 4, y:11 },
                { x: 5, y:11 },
                { x: 6, y:11 },
                { x: 7, y:11 },
                { x: 9, y:11 },
                { x:10, y:11 },
                { x:12, y:11 },
                { x:13, y:11 },
                { x:14, y:11 },
                { x:15, y:11 },
                { x:16, y:11 },
                { x:17, y:11 },
                { x:19, y:11 },
                
                { x: 0, y:12 },
                { x:19, y:12 },
                
                { x: 0, y:13 },
                { x: 1, y:13 },
                { x: 2, y:13 },
                { x: 3, y:13 },
                { x: 4, y:13 },
                { x: 5, y:13 },
                { x: 6, y:13 },
                { x: 7, y:13 },
                { x: 8, y:13 },
                { x: 9, y:13 },
                { x:10, y:13 },
                { x:11, y:13 },
                { x:12, y:13 },
                { x:13, y:13 },
                { x:14, y:13 },
                { x:15, y:13 },
                { x:16, y:13 },
                { x:17, y:13 },
                { x:18, y:13 },
                { x:19, y:13 }]
const FRUITS = [{ x:16, y: 1}]
const START  = { x: 9, y: 8 } // Starting position
const STARTBIRDS = [{ x: 8, y: 6 }, 
                    { x: 9, y: 6 }, 
                    { x:10, y: 6 },
                    { x:11, y: 6 }]

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

const nextPeck1 = state => {
  const optionsPeck1 = [NORTH, WEST, SOUTH, EAST];
  const optionsPeck2 = optionsPeck1.filter(p => notOpositeMove(state)(0)(p))
  const optionsPeck3 = optionsPeck2 .filter(p => avoidMazeB(state)(0)(p));
  const optionsPeck4 = orderMoves(optionsPeck3)(targetPosition)(state.ghosts[0]);
// Escape deadends
  if (optionsPeck4.length === 0) {
    return ({ x: 0 - state.pecks[0].x, y: 0 - state.pecks[0].y });
  }
  return optionsPeck4[0];
};

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

  const optionsPeck4 = orderMoves([...optionsPeck3])(target3)(state.ghosts[3])
  // Escape deadends
  if(optionsPeck4.length == 0){
     return ({ x: 0 - state.pecks[3].x, y: 0 - state.pecks[3].y });
  }
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

const nextGhost1 = state => nextBeak(state)(0)(nextPeck1(state));
const nextGhost2 = state => nextBeak(state)(1)(nextPeck2(state));
const nextGhost3 = state => nextBeak(state)(2)(nextPeck3(state));
const nextGhost4 = state => nextBeak(state)(3)(nextPeck4(state));

const nextBirds = state => pointEq(state.moves[0])(STOP) 
   ? state.ghosts
   : [nextGhost1(state), 
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
