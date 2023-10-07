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
const WALLS  = [{ x: 0, y: 0 }, { x: 1, y: 0 },
                { x: 2, y: 0 }, { x: 3, y: 0 },
                { x: 4, y: 0 }, { x: 5, y: 0 },
                { x: 6, y: 0 }, { x: 7, y: 0 },
                { x: 8, y: 0 }, { x: 9, y: 0 },
                { x:10, y: 0 }, { x:11, y: 0 },
                { x:12, y: 0 }, { x:13, y: 0 },
                { x:14, y: 0 }, { x:15, y: 0 },
                { x:16, y: 0 }, { x:17, y: 0 },
                { x:18, y: 0 }, { x:19, y: 0 },
                
                { x: 0, y: 1 }, { x:19, y: 1 },
                
                { x: 0, y: 2 }, { x: 2, y: 2 },
                { x: 3, y: 2 }, { x: 5, y: 2 },
                { x: 8, y: 2 }, { x: 9, y: 2 },
                { x:10, y: 2 }, { x:11, y: 2 },
                { x:14, y: 2 }, { x:16, y: 2 },
                { x:17, y: 2 }, { x:19, y: 2 },
                
                { x: 0, y: 3 }, { x: 2, y: 3 },
                { x: 3, y: 3 }, { x: 5, y: 3 },
                { x: 6, y: 3 }, { x: 8, y: 3 },
                { x: 9, y: 3 }, { x:10, y: 3 },
                { x:11, y: 3 }, { x:13, y: 3 },
                { x:14, y: 3 }, { x:16, y: 3 },
                { x:17, y: 3 }, { x:19, y: 3 },
                 
                { x: 0, y: 4 }, { x: 5, y: 4 },
                { x:14, y: 4 }, { x:19, y: 4 },
                
                { x: 0, y: 5 }, { x: 1, y: 5 },
                { x: 2, y: 5 }, { x: 3, y: 5 },
                { x: 5, y: 5 }, { x: 7, y: 5 },
                { x: 8, y: 5 }, { x:11, y: 5 },
                { x:12, y: 5 }, { x:14, y: 5 },
                { x:16, y: 5 }, { x:17, y: 5 },
                { x:18, y: 5 }, { x:19, y: 5 },
                 
                { x: 7, y: 6 }, { x:12, y: 6 },
                
                { x: 0, y: 7 }, { x: 2, y: 7 },
                { x: 3, y: 7 }, { x: 5, y: 7 },
                { x: 7, y: 7 }, { x: 8, y: 7 },
                { x: 9, y: 7 }, { x:10, y: 7 },
                { x:11, y: 7 }, { x:12, y: 7 },
                { x:14, y: 7 }, { x:16, y: 7 },
                { x:17, y: 7 }, { x:19, y: 7 },
                
                { x: 0, y: 8 }, { x:19, y: 8 },
                
                { x: 0, y: 9 }, { x: 1, y: 9 },
                { x: 3, y: 9 }, { x: 5, y: 9 },
                { x: 7, y: 9 }, { x: 8, y: 9 },
                { x: 9, y: 9 }, { x:10, y: 9 },
                { x:11, y: 9 }, { x:12, y: 9 },
                { x:14, y: 9 }, { x:16, y: 9 },
                { x:18, y: 9 }, { x:19, y: 9 },
                
                { x: 0, y:10 }, { x: 5, y:10 },
                { x: 9, y:10 }, { x:10, y:10 },
                { x:14, y:10 }, { x:19, y:10 },
                
                { x: 0, y:11 }, { x: 2, y:11 },
                { x: 3, y:11 }, { x: 4, y:11 },
                { x: 5, y:11 }, { x: 6, y:11 },
                { x: 7, y:11 }, { x: 9, y:11 },
                { x:10, y:11 }, { x:12, y:11 },
                { x:13, y:11 }, { x:14, y:11 },
                { x:15, y:11 }, { x:16, y:11 },
                { x:17, y:11 }, { x:19, y:11 },
                
                { x: 0, y:12 }, { x:19, y:12 },
                
                { x: 0, y:13 }, { x: 1, y:13 },
                { x: 2, y:13 }, { x: 3, y:13 },
                { x: 4, y:13 }, { x: 5, y:13 },
                { x: 6, y:13 }, { x: 7, y:13 },
                { x: 8, y:13 }, { x: 9, y:13 },
                { x:10, y:13 }, { x:11, y:13 },
                { x:12, y:13 }, { x:13, y:13 },
                { x:14, y:13 }, { x:15, y:13 },
                { x:16, y:13 }, { x:17, y:13 },
                { x:18, y:13 }, { x:19, y:13 }]

const FRUITS = [{ x: 1, y: 1 }, { x: 2, y: 1 },
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
                
const STARTEGGS = [{ x: 1, y: 4 }, { x: 1, y:10 }, 
                   { x:18, y: 4 }, { x:18, y:10 }]

const START  = { x: 9, y: 8 } // Starting position
const STARTBIRDS = [{ x: 8, y: 6 }, 
                    { x: 9, y: 6 }, 
                    { x:10, y: 6 },
                    { x:11, y: 6 }]
const LIFES = [{ x:20, y: 0 },
               { x:20, y: 1 }]

// Point operations
const pointEqual = position1 => position2 => (position1.x == position2.x 
                                              && 
                                              position1.y == position2.y)

// Booleans
const wontEat          = state => p => pointEqual(nextHead(state))(p) ? false : true
const eggWillBeEaten   = state => state.eggs.some(pointEqual(nextHead(state))) ? true : false 
const snakeWillBeEaten = state => 
  state.birds.some((p, i) => isFrightened(state)(i) 
    ? false
    : (pointEqual(nextHead(state))(p)
       ||
       pointEqual(state.snake[0])(p))) 
const birdWillBeEaten = state => i => (pointEqual(nextHead(state))(state.birds[i]) 
                                       || 
                                       pointEqual(state.snake[0])(state.birds[i]))
const avoidMaze       = state => p => WALLS.some(pointEqual(p)) ? false : true
const notOpositeMove  = state => i => peck =>
  (state.pecks[i].x + peck.x != 0) || (state.pecks[i].y + peck.y !=0)
const isFrightened = state => i => (state.frightened[i] != 0) 
  ? ((state.timegame - state.frightened[i] >= 15)
    ? false
    : true)
  : false
const inScatterMode = state => ((Math.trunc(state.timegame / 20) % 2) == 0)

const nextMoves = state => (state.moves.length > 1) ? dropFirst(state.moves) : state.moves
const nextLives = state => (state.lives.length > 0) ? dropFirst(state.lives) : state.lives

const chosenPeck = target => state => i => {
  // Preference for anti-clockwise movement,
  // giving highest priority to NORTH
  const optionsPeck1 = [NORTH, WEST, SOUTH, EAST];
  // Avoids turning around (180)
  const optionsPeck2 = [...optionsPeck1].filter(p => notOpositeMove(state)(i)(p))
  // Does not hit the maze walls
  const optionsPeck3 = [...optionsPeck2].filter(p => avoidMaze(state)(nextBeak(state)(i)(p)));
  
  // Orders the movements according to 
  // the distance from the bird to the target
  // From closest to furthest
  const optionsPeck4 = orderMoves([...optionsPeck3])(target)(state.birds[i]);

  // Escape deadends
  if (optionsPeck4.length === 0) {
    return ({ x: 0 - state.pecks[i].x, y: 0 - state.pecks[i].y });
  }
  
  // Returns "best" move
  return optionsPeck4[0];
}

const nextPeck1 = state => {
  const target = isFrightened(state)(0)
    ? randomPosition()
    : (inScatterMode(state) 
      ? ({ x:19, y:-3 })
      : state.snake[0])

  return chosenPeck(target)(state)(0);
};
const nextPeck2 = state => {
  const target = isFrightened(state)(1)
    ? randomPosition()
    : (inScatterMode(state)
      ? ({ x:19, y:16 })
      : (pointEqual(state.moves[0])(NORTH)
        ? ({ x: (state.snake[0].x - 2), y: (state.snake[0].y - 2)})
        : ({ x: (state.snake[0].x + 2 * state.moves[0].x), y: (state.snake[0].y + 2 * state.moves[0].y)})));

  return chosenPeck(target)(state)(1);
}
const nextPeck3 = state => {
  // General movement rule:
  //   Goes after the snake if distant,
  //   but goes to the bottom left corner if close

  // Calculates the distance
  const radiusPeck = distance(state.snake[0])(state.birds[2])
  // Choice of target based on the genral movement rule
  const target = isFrightened(state)(2)
    ? randomPosition()
    : ((inScatterMode(state) || (radiusPeck <= 10)) 
      ? ({ x: 0, y:16 })
      : state.snake[0])
  
  return chosenPeck(target)(state)(2);
}
const nextPeck4 = state => {
  const target1 = nextHead(state)
  const target2 = state.birds[0]
  const target3 = ({x: (2 * target1.x - target2.x),
                    y: (2 * target1.y - target2.y)
  })
  
  const target = isFrightened(state)(3)
    ? randomPosition()
    : (inScatterMode(state)
      ? ({ x: 0, y:-3 })
      : target3)

  return chosenPeck(target)(state)(3);
}

const nextPecks = state => [nextPeck1(state),
                            nextPeck2(state),
                            nextPeck3(state),
                            nextPeck4(state)]

const nextApple = state => state.apples.filter(wontEat(state))
const nextEgg   = state => state.eggs.filter(wontEat(state))

const nextHead  = state => ({
      x: mod(COLS)(state.snake[0].x + state.moves[0].x),
      y: mod(ROWS)(state.snake[0].y + state.moves[0].y)
    })

const nextBeak  = state => i => move => ({
      x: mod(COLS)(state.birds[i].x + move.x),
      y: mod(ROWS)(state.birds[i].y + move.y)
    })

const nextSnake = state => snakeWillBeEaten(state)
  ? [] 
  : (avoidMaze(state)(nextHead(state)) 
    // Stops the snake when facing a wall
     ? [nextHead(state)] 
     : state.snake) 

const basicNextBird = state => i => movepeck => (isFrightened(state)(i) && birdWillBeEaten(state)(i))
  ? STARTBIRDS[i]
  : ((state.timebirds >= (i * 10))
    ? nextBeak(state)(i)(movepeck[i])
    : state.birds[i])

const nextBird  = state => i => basicNextBird(state)(i)(nextPecks(state))

const nextBirds = state => pointEqual(state.moves[0])(STOP)
  //At the beginning of a stage, 
  //the birds only start moving after the snake moves
  ? state.birds
  : [nextBird(state)(0), 
     nextBird(state)(1),
     nextBird(state)(2),
     nextBird(state)(3)]

const nextTimeBirds = state => (state.timebirds + 1)
const nextTimeGame  = state => pointEqual(state.moves[0])(STOP)
  ? state.timegame
  : (state.timegame + 1)

const nextFright = state => i => isFrightened(state)(i)
  ? (birdWillBeEaten(state)(i)
    ? 0
    : state.frightened[i])
  : 0   
const nextFrightened = state => eggWillBeEaten(state)
  ? [state.timegame, 
     state.timegame, 
     state.timegame, 
     state.timegame]
  : [nextFright(state)(0), 
     nextFright(state)(1), 
     nextFright(state)(2), 
     nextFright(state)(3)]

// Returns a random position
const randomPosition = () => ({
  x: rnd(0)(COLS - 1),
  y: rnd(0)(ROWS - 1)
})

// Initial state
const initialState = () => ({
  moves: [STOP], 
  snake: [START],
  apples: FRUITS,
  eggs:  STARTEGGS,
  pecks: [STOP, STOP, STOP, STOP],
  birds: STARTBIRDS,
  timebirds: 0,
  timegame:  0,
  lives: LIFES, // Add lives
  frightened: [0, 0, 0, 0]
})

// Bird eats snake state
const eatenState = state => ({
  moves: [NORTH], 
  snake: [START],
  apples: state.apples,
  eggs:  state.eggs,
  pecks: [STOP, STOP, STOP, STOP],
  birds: STARTBIRDS,
  timebirds: 0,
  timegame: state.timegame,
  lives: nextLives(state), // remove life
  frightened: [0, 0, 0, 0]
})

const next = state => state.snake.length == 0
  ? (state.lives.length > 0 //Check array of lives
    ? eatenState(state)     //shortens life
    : initialState())       //Reset game
  : (((state.apples.length == 0) && (state.eggs.length == 0))
    ? initialState()
    : ({
        moves: nextMoves(state),
        snake: nextSnake(state),
        apples: nextApple(state),
        eggs:  nextEgg(state),
        pecks: nextPecks(state),
        birds: nextBirds(state),
        timebirds: nextTimeBirds(state),
        timegame:  nextTimeGame(state),
        lives: state.lives,
        frightened: nextFrightened(state) 
      }));

const enqueue = (state, move) => (state.moves.length < 4) ? merge(state)({ moves: state.moves.concat([move]) })
  : state

module.exports = { COLS, ROWS, EAST, NORTH, SOUTH, WEST, WALLS, initialState, enqueue, next, }
