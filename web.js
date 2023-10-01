const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Constant that represents the art grid size
const BITS = 32

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
  
  // draw snake
  ctx.fillStyle = 'rgb(255,255,0)'
  ctx.fillRect(x(state.snake[0].x), y(state.snake[0].y), x(1), y(1)))

  // draw apples
  ctx.fillStyle = 'rgb(255,50,0)'
  ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))
  // draw Ghosts
  ctx.fillStyle = 'rgb(255,182,193)'
  ctx.fillRect(x(state.ghosts[0].x), y(state.ghosts[0].y), x(1), y(1))
  ctx.fillStyle = 'rgb(255,0,0)'
  ctx.fillRect(x(state.ghosts[1].x), y(state.ghosts[1].y), x(1), y(1))
  ctx.fillStyle = 'rgb(0,255,255)'
  ctx.fillRect(x(state.ghosts[2].x), y(state.ghosts[2].y), x(1), y(1))
  ctx.fillStyle = 'rgb(236,236,83)'
  ctx.fillRect(x(state.ghosts[3].x), y(state.ghosts[3].y), x(1), y(1))

  // add crash
  if (state.snake.length == 0){
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
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
