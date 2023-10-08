const base = require('./base')
Object.getOwnPropertyNames(base).map(p => global[p] = base[p])

// Constants 
// maze size
const COLS  = 20
const ROWS  = 14
// movement 
const NORTH = { x: 0, y:-1 } 
const SOUTH = { x: 0, y: 1 } 
const EAST  = { x: 1, y: 0 } 
const WEST  = { x:-1, y: 0 }
const STOP  = { x: 0, y: 0 } // Move Stop
// position
const WALLS  = [
// Layer in West and South
  [{ x: 0, y: 0 }, { x: 2, y: 2 }, { x:16, y: 2 }, { x: 8, y: 2 },{ x: 9, y: 9 }],
// Layer in East and South
  [{ x:19, y: 0 }, { x: 3, y: 2 }, { x:17, y: 2 }, { x:11, y: 2 },{ x:10, y: 9 }],
// Layer in North and West
  [{ x: 0, y: 5 }, { x: 2, y: 3 }, { x:16, y: 3 }, { x: 8, y: 3 }, { x: 0, y:13 },{ x: 9, y:11 }],
// Layer in North and East
  [{ x: 19, y: 5 }, { x: 3, y: 3 }, { x:17, y: 3 },{ x:11, y: 3 },  { x:19, y:13 },{ x:10, y:11 }],

// Layer in East and West
  [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },{ x: 4, y: 0 }, { x: 5, y: 0 },
   { x: 6, y: 0 },{ x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 },{ x:10, y: 0 },
   { x:11, y: 0 }, { x:12, y: 0 },{ x:13, y: 0 }, { x:14, y: 0 }, { x:15, y: 0 },
   { x:16, y: 0 }, { x:17, y: 0 }, { x:18, y: 0 },{ x: 1, y:13 },{ x: 2, y:13 },
   { x: 3, y: 13 }, { x: 4, y:13 }, { x: 5, y:13 },{ x: 6, y:13 },{ x: 7, y:13 },
   { x: 8, y: 13 }, { x: 9, y:13 },{ x:10, y:13 }, { x:11, y:13 },{ x:12, y:13 },
   { x:13, y: 13 }, { x:14, y:13 }, { x:15, y:13 },{ x:16, y:13 }, { x:17, y:13 },
   { x:18, y: 13 }, { x: 3, y:11 }, { x: 4, y:11 },{ x: 6, y:11 },{ x:13, y:11 },
   { x:15, y: 11 }, { x:16, y:11 },{ x: 8, y: 9 },{ x:11, y: 9 }], 
// Layer in North and South-
  [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 },{ x: 0, y: 4 }, { x:19, y: 1 },
    { x:19, y: 2 },{ x:19, y: 3 }, { x:19, y: 4 }, { x: 5, y: 4 },{ x:14, y: 4 },
    { x: 1, y: 5 }, { x: 2, y: 5 },{ x:17, y: 5 }, { x:18, y: 5 }, { x: 0, y: 8 },
    { x: 0, y:10 }, { x: 0, y:11 }, { x: 0, y:12 },{ x:19, y: 8 }, { x:19, y:10 },
    { x:19, y:11 },{ x:19, y:12 },{ x: 5, y:10 },{ x: 9, y:10 }, { x:10, y:10 },{ x:14, y:10 }],

// Layer in East
  [{ x: 3, y: 5 }, { x: 6, y: 3 },{ x: 1, y: 9 },{ x:12, y: 9 },{ x: 7, y:11 },{ x:17, y:11 },{ x: 3, y: 7 },{ x:17, y: 7 },{ x: 6, y: 7 },{ x:14, y: 7 }],
// Layer in West
  [{ x:13, y: 3 }, { x:16, y: 5 },{ x: 7, y: 9 }, { x:18, y: 9 },{ x: 2, y:11 }, { x:12, y:11 },{ x: 2, y: 7 }, { x:16, y: 7 },{ x:13, y: 7 },{ x: 5, y: 7 }],
// Layer in North
  [{ x: 5, y: 5 }, { x:14, y: 5 }],
// Layer in South
  [{ x: 5, y: 2 }, { x:14, y: 2 },{ x: 0, y: 7 }, { x:19, y: 7 }, { x: 5, y: 9 },{ x:14, y: 9 }], 

  [{ x: 9, y: 2 },{ x:10, y: 2 }], // Layer in South, East, West
  [{ x: 9, y: 3 },{ x:10, y: 3 }], // Layer in North, East, West
  [{ x: 0, y: 9 },{ x: 5, y: 3 }], // Layer in North, South, West
  [{ x:19, y: 9 },{ x:14, y: 3 }], // Layer in North, South, East
  [{ x: 5, y:11 },{ x:14, y:11 }], // Layer in North, West, East

// Not Layer
  [{ x: 3, y: 9 },{ x:16, y: 9 }], 

// Basket
  [{ x: 7, y: 5 }, { x: 8, y: 5 }, { x:11, y: 5 }, { x:12, y: 5 }, 
    { x: 8, y: 6 }, { x:11, y: 6 },  { x: 8, y: 7 },
    { x: 9, y: 7 }, { x:10, y: 7 }, { x:11, y: 7 }]                                         
      ]
const START_APPLES = [
                { x: 1, y: 1 }, { x: 2, y: 1 },
                { x: 3, y: 1 }, { x: 4, y: 1 },
                { x: 5, y: 1 }, { x: 6, y: 1 },
                { x: 7, y: 1 }, { x: 8, y: 1 },
                { x: 9, y: 1 }, { x:10, y: 1 },
                { x:11, y: 1 }, { x:12, y: 1 },
                { x:13, y: 1 }, { x:14, y: 1 },
                { x:15, y: 1 }, { x:16, y: 1 }, 
                { x:17, y: 1 }, { x:18, y: 1 },
                
                { x: 1, y: 2 }, { x: 4, y: 2 },
                { x: 6, y: 2 }, { x: 7, y: 2 }, 
                { x:12, y: 2 }, { x:13, y: 2 }, 
                { x:15, y: 2 }, { x:18, y: 2 },
                
                { x: 1, y: 3 }, { x: 4, y: 3 }, 
                { x:15, y: 3 }, { x:18, y: 3 },
                
                { x: 2, y: 4 }, { x: 3, y: 4 }, 
                { x: 4, y: 4 }, { x:15, y: 4 }, 
                { x:16, y: 4 }, { x:17, y: 4 },
                
                { x: 4, y: 5 }, { x:15, y: 5 },
                { x: 4, y: 6 }, { x:15, y: 6 },
                { x: 4, y: 7 }, { x:15, y: 7 },
                
                { x: 1, y: 8 }, { x: 2, y: 8 },
                { x: 3, y: 8 }, { x: 4, y: 8 },
                { x:15, y: 8 }, { x:16, y: 8 }, 
                { x:17, y: 8 }, { x:18, y: 8 },
                
                { x: 2, y: 9 }, { x: 4, y: 9 },
                { x:15, y: 9 }, { x:17, y: 9 },
                
                { x: 2, y:10 }, { x: 3, y:10 }, 
                { x: 4, y:10 }, { x: 6, y:10 },
                { x: 7, y:10 }, { x: 8, y:10 },
                { x:11, y:10 }, { x:12, y:10 }, 
                { x:13, y:10 }, { x:15, y:10 }, 
                { x:16, y:10 }, { x:17, y:10 },
                
                { x: 1, y:11 }, { x: 8, y:11 },
                { x:11, y:11 }, { x:18, y:11 },
                
                { x: 1, y:12 }, { x: 2, y:12 },
                { x: 3, y:12 }, { x: 4, y:12 },
                { x: 5, y:12 }, { x: 6, y:12 },
                { x: 7, y:12 }, { x: 8, y:12 },
                { x: 9, y:12 }, { x:10, y:12 },
                { x:11, y:12 }, { x:12, y:12 },
                { x:13, y:12 }, { x:14, y:12 },
                { x:15, y:12 }, { x:16, y:12 }, 
                { x:17, y:12 }, { x:18, y:12 }]
                
const START_EGGS = [{ x: 1, y: 4 }, { x: 1, y:10 }, 
                    { x:18, y: 4 }, { x:18, y:10 }]

const START_SNAKE  = [{ x: 9, y: 8 }] // Starting position

const START_BIRDS = [{ x: 9, y: 5 }, 
                     { x:10, y: 6 }, 
                     { x: 9, y: 6 },
                     { x:10, y: 5 }]

const START_LIVES = [{ x:20, y: 1 },
                    { x:20, y: 0 }]

const SCATTER_TARGETS = [{ x:20, y: 0 }, 
                         { x:20, y:15 }, 
                         { x:-1, y:15 },
                         { x:-1, y: 0 }]

// Point operation
const pointEqual = position1 => position2 => (position1.x == position2.x 
                                              && 
                                              position1.y == position2.y)

// Boolean tests
// -foods
const wontEat          = state => p => pointEqual(nextBite(state))(p) ? false : true
const eggWillBeEaten   = state => state.eggs.some(pointEqual(nextBite(state))) ? true : false 
// -snake state
const willSnakeBeEaten = state => state.birds.some((p, i) => 
  isFrightened(state)(i) 
    ? false
    : (pointEqual(nextBite(state))(p)
       ||
       pointEqual(state.snake[0])(p))
  ) 
// -bird states
const willBirdBeEaten = state => i => (pointEqual(nextBite(state))(state.birds[i]) 
                                       || 
                                       pointEqual(state.snake[0])(state.birds[i]))
const isFrightened    = state => i => (state.frightened[i] != 0)
const isFrightOver    = state => i => (state.timegame - state.frightened[i]) > 15
// Bird waits before it starts moving in a new turn
const isTimeToPeck    = state => i => (state.timegame >= (i * 10))
// Alternates scatter and chase evey 35 game ticks 
const areBirdsInScatterMode = state => ((Math.trunc(state.timegame / 35) % 2) == 0)
// -movement and position
const willAvoidMaze  = state => p => !((WALLS.flat()).some(pointEqual(p)))
const notOpositeMove = state => i => peck =>
  (state.pecks[i].x + peck.x != 0) || (state.pecks[i].y + peck.y != 0) 
// -game states
const gameWaiting   = state => (pointEqual(state.moves[0])(STOP)
                                &&
                                state.moves.length == 1)
const gameLost      = state => (state.lives.length == 0)
const gameWon       = state => (state.apples.length == 0 && state.eggs.length == 0)

// Functions that return updated states
// -moves (snake movement)
const nextMoves = state => (state.moves.length > 1) ? dropFirst(state.moves) : state.moves
// -snake
const nextBite  = state => ({
      x: adjustInterval(COLS)(state.snake[0].x + state.moves[0].x),
      y: adjustInterval(ROWS)(state.snake[0].y + state.moves[0].y)
    })
const nextSnake = state => willSnakeBeEaten(state)
  ? [] 
  : (willAvoidMaze(state)(nextBite(state))
    ? [nextBite(state)] 
    : state.snake) 
// -pecks (bird movement)
const chosenPeck = target => state => i => {
  // Preference in this order,
  // from highest to lowest
  const optionsPeck1 = [NORTH, WEST, SOUTH, EAST];
  // Avoids turning around (180)
  const optionsPeck2 = [...optionsPeck1].filter(notOpositeMove(state)(i))
  // Does not hit the maze walls
  const optionsPeck3 = [...optionsPeck2].filter(p => willAvoidMaze(state)(nextBeak(state)(i)(p)));
  
  const targetToUse = isFrightened(state)(0)
    ? randomPosition()
    : (areBirdsInScatterMode(state) 
      ? SCATTER_TARGETS[i]
      : target)
    
  // Orders the movements according to 
  // the distance from the bird to the target
  // From closest to furthest
  const optionsPeck4 = orderMoves([...optionsPeck3])(targetToUse)(state.birds[i]);
  
  // Returns "best" move
  return optionsPeck4[0];
}
// peck from bird1, index (i) 0
const nextPeck1 = state => {
  // General movement rule
  //   Targets the snake
  
  const target = state.snake[0]

  return chosenPeck(target)(state)(0);
}
const nextPeck2 = state => {
  // General movement rule
  //   Targets where the snake will go
  
  const target = pointEqual(state.moves[0])(NORTH)  
    // Offsets the meant target to the left,
    // if the snake is moving NORTH
    ? ({ x: (state.snake[0].x - 2), y: (state.snake[0].y - 2)}) 
    : ({ x: (state.snake[0].x + 2 * state.moves[0].x), 
         y: (state.snake[0].y + 2 * state.moves[0].y)});

  return chosenPeck(target)(state)(1);
}
const nextPeck3 = state => {
  // General movement rule:
  //   Goes after the snake if distant,
  //   but goes to the bottom left corner if close

  // Calculates the distance
  const radiusPeck = distance(state.snake[0])(state.birds[2])
  
  const target = (radiusPeck <= 10) 
    ? SCATTER_TARGETS[2]
    : state.snake[0]
  
  return chosenPeck(target)(state)(2);
}
const nextPeck4 = state => {
  // General movement rule:
  //   Tries to assist the bird1 
  //   by flanking the snake

  const target1 = pointEqual(state.moves[0])(NORTH)  
    // Offsets the meant target to the left,
    // if the snake is moving NORTH
    ? ({ x: (state.snake[0].x - 1), y: (state.snake[0].y - 1)}) 
    : nextBite(state)
  const target2 = state.birds[0]
  
  const target = ({x: (2 * target1.x - target2.x),
                   y: (2 * target1.y - target2.y)})

  return chosenPeck(target)(state)(3);
}
const nextPecks = state => [nextPeck1(state),
                            nextPeck2(state),
                            nextPeck3(state),
                            nextPeck4(state)]
// -birds state
const nextBeak = state => i => move => ({
      x: adjustInterval(COLS)(state.birds[i].x + move.x),
      y: adjustInterval(ROWS)(state.birds[i].y + move.y)
    })
const nextBird = state => i => (willBirdBeEaten(state)(i) && isFrightened(state)(i))
  ? START_BIRDS[i]
  : (isTimeToPeck(state)(i)
    ? nextBeak(state)(i)(nextPecks(state)[i])
    : state.birds[i])
const nextBirds = state => [nextBird(state)(0), 
                            nextBird(state)(1),
                            nextBird(state)(2),
                            nextBird(state)(3)]
// -frightened state
const nextFright = state => i => 
  (isFrightOver(state)(i) || willBirdBeEaten(state)(i))
  ? 0
  : state.frightened[i]
const nextFrightened = state => eggWillBeEaten(state)
  ? [state.timegame, 
     state.timegame, 
     state.timegame, 
     state.timegame]
  : [nextFright(state)(0), 
     nextFright(state)(1), 
     nextFright(state)(2), 
     nextFright(state)(3)]
// -apples state
const nextApple = state => state.apples.filter(wontEat(state))
// -eggs state
const nextEgg   = state => state.eggs.filter(wontEat(state))
// -time game state
const nextTimeGame  = state => (state.timegame + 1)
// -lives state
const nextLives = state => (state.lives.length > 0) ? dropFirst(state.lives) : []

// Returns a random position
const randomPosition = () => ({
  x: randomNumber(0)(COLS - 1),
  y: randomNumber(0)(ROWS - 1)
})

// Initial state
const initialState = () => ({
  moves:      [STOP], 
  snake:      START_SNAKE,
  pecks:      [STOP, STOP, STOP, STOP],
  birds:      START_BIRDS,
  frightened: [0, 0, 0, 0],
  apples:     START_APPLES,
  eggs:       START_EGGS,
  timegame:   0,
  lives:      START_LIVES
})

// Bird eats snake state
const eatenState = state => ({
  moves:      [NORTH], 
  snake:      START_SNAKE,
  pecks:      [STOP, STOP, STOP, STOP],
  birds:      START_BIRDS,
  frightened: [0, 0, 0, 0],
  apples:     state.apples,
  eggs:       state.eggs,
  timegame:   0,
  lives:      nextLives(state)
})

// Usual next state
const basicNextState = state => ({
  moves:      nextMoves(state),
  snake:      nextSnake(state),
  pecks:      nextPecks(state),
  birds:      nextBirds(state),
  frightened: nextFrightened(state),
  apples:     nextApple(state),
  eggs:       nextEgg(state),
  timegame:   nextTimeGame(state),
  lives:      state.lives
})

// Returns next game turn 
const next = state => state.snake.length == 0
  // If the snake was eaten,
  ? (gameLost(state) 
    ? initialState()
    : eatenState(state))           
  : (gameWon(state) || gameWaiting(state)        
    ? initialState()
    : basicNextState(state))

const enqueue = (state, move) => (state.moves.length < 4) ? merge(state)({ moves: state.moves.concat([move]) })
  : state

module.exports = { COLS, ROWS, EAST, NORTH, SOUTH, WEST, WALLS, initialState, enqueue, next, }
