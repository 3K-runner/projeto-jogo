const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Constant that represents the art grid size
const BITS = 16

// Art "Sprites"
const SGUINE = [{x: 7, y: 2, l: 2, colour: 'rgb(56,56,56)'},
{x: 7, y: 3, l: 2, colour: 'rgb(56,56,56)'},

{x: 5, y: 4, l: 6, colour: 'rgb(0,0,0)'},

{x: 4, y: 5, l: 8, colour: 'rgb(0,0,0)'},
{x: 5, y: 5, l: 6, colour: 'rgb(165,20,17)'},

{x: 3, y: 6, l:10, colour: 'rgb(0,0,0)'},
{x: 4, y: 6, l: 8, colour: 'rgb(165,20,17)'}, 
{x: 5, y: 6, l: 2, colour: 'rgb(255,255,255)'},
{x: 9, y: 6, l: 2, colour: 'rgb(255,255,255)'},
 
{x: 2, y: 7, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y: 7, l: 8, colour: 'rgb(165,20,17)'},
{x: 5, y: 7, l: 6, colour: 'rgb(255,255,255)'}, 
{x: 6, y: 7, l: 4, colour: 'rgb(0,0,0)'},
{x: 7, y: 7, l: 2, colour: 'rgb(214,173,34)'},

{x: 1, y: 8, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 8, l:12, colour: 'rgb(56,56,56)'},
{x: 3, y: 8, l:10, colour: 'rgb(0,0,0)'}, 
{x: 4, y: 8, l: 8, colour: 'rgb(55,57,191)'},
{x: 5, y: 8, l: 6, colour: 'rgb(165,20,17)'},
{x: 7, y: 8, l: 2, colour: 'rgb(214,173,34)'},

{x: 1, y: 9, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 9, l:12, colour: 'rgb(154,154,154)'},
{x: 3, y: 9, l:10, colour: 'rgb(0,0,0)'}, 
{x: 4, y: 9, l: 8, colour: 'rgb(154,154,154)'},
{x: 5, y: 9, l: 6, colour: 'rgb(165,20,17)'},
{x: 6, y: 9, l: 4, colour: 'rgb(56,56,56)'},
{x: 7, y: 9, l: 2, colour: 'rgb(55,57,191)'},

{x: 1, y:10, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y:10, l:12, colour: 'rgb(56,56,56)'},
{x: 3, y:10, l:10, colour: 'rgb(0,0,0)'}, 
{x: 4, y:10, l: 8, colour: 'rgb(56,56,56)'},
{x: 5, y:10, l: 6, colour: 'rgb(55,57,191)'},
{x: 6, y:10, l: 4, colour: 'rgb(56,56,56)'},

{x: 2, y:11, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y:11, l: 8, colour: 'rgb(154,154,154)'},
{x: 5, y:11, l: 6, colour: 'rgb(56,56,56)'}, 
{x: 6, y:11, l: 4, colour: 'rgb(154,154,154)'},
{x: 7, y:11, l: 2, colour: 'rgb(56,56,56)'},

{x: 4, y:12, l: 8, colour: 'rgb(0,0,0)'}, 
{x: 5, y:12, l: 6, colour: 'rgb(154,154,154)'},
{x: 6, y:12, l: 4, colour: 'rgb(0,0,0)'},

{x: 5, y:13, l: 1, colour: 'rgb(0,0,0)'}, 
{x:10, y:13, l: 1, colour: 'rgb(0,0,0)'},

{x: 5, y:14, l: 1, colour: 'rgb(0,0,0)'},
{x:10, y:14, l: 1, colour: 'rgb(0,0,0)'}, 

{x: 4, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 6, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 9, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x:11, y:15, l: 1, colour: 'rgb(0,0,0)'}]

// Mutable state
let state = initialState()

// Position helpers
// for entire square
// -Takes a coordinate and resizes it for the canvas 
const x = c => Math.round(c * canvas.width / state.cols) 
const y = r => Math.round(r * canvas.height / state.rows) 
// for grid art
// -Takes a coordinate and applies the grid on it
const xg = bc => c => x(bc.x + c.x/BITS) 
const yg = br => r => y(br.y + r.y/BITS)

// Game loop draw
const draw = () => {
  // clear
  ctx.fillStyle = '#232323'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // draw maze
  ctx.fillStyle = 'rgb(0,50,255)'
  WALLS.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

  // draw apples
  ctx.fillStyle = 'rgb(255,50,0)'
  state.apple.map(p => ctx.fillRect(x(p.x + 1/4), y(p.y + 1/4), x(1/2), y(1/2)))

  // draw Ghosts
  ctx.fillStyle = 'rgb(255,182,193)'
  ctx.fillRect(x(state.ghosts[0].x), y(state.ghosts[0].y), x(1), y(1))
  
  ctx.fillStyle = 'rgb(255,0,0)'
  ctx.fillRect(x(state.ghosts[1].x), y(state.ghosts[1].y), x(1), y(1))

  SGUINE.map(p => {
  ctx.fillStyle = p.colour
  ctx.fillRect(xg(state.ghosts[2])(p), yg(state.ghosts[2])(p), x(p.l/BITS), y(1/BITS))
  })

  ctx.fillStyle = 'rgb(236,236,83)'
  ctx.fillRect(x(state.ghosts[3].x), y(state.ghosts[3].y), x(1), y(1))

  // add crash
  if (state.snake.length == 0){
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  } else {
    // draw snake
    ctx.fillStyle = 'rgb(255,255,0)'
    ctx.fillRect(x(state.snake[0].x), y(state.snake[0].y), x(1), y(1))
  }
}

// Game loop update
const step = t1 => t2 => {
  if (t2 - t1 > 100) {
    state = next(state)
    draw()
    window.requestAnimationFrame(step(t2))
  } else {
    window.requestAnimationFrame(step(t1))
  }
}

// Key events
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w': case 'h': case 'ArrowUp':    state = enqueue(state, NORTH); break
    case 'a': case 'j': case 'ArrowLeft':  state = enqueue(state, WEST);  break
    case 's': case 'k': case 'ArrowDown':  state = enqueue(state, SOUTH); break
    case 'd': case 'l': case 'ArrowRight': state = enqueue(state, EAST);  break
  }
})

// Main
draw(); window.requestAnimationFrame(step(0))
