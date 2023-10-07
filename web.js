const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Constant that represents the art grid size
const BITS = 16

// Mutable state
let state = initialState()

// Position helpers
// for entire square
// -Takes a coordinate and resizes it for the canvas 
const x = c => Math.round(c * canvas.width / (COLS + 1)) 
const y = r => Math.round(r * canvas.height / ROWS) 
// for grid art
// -Takes a coordinate and applies the grid on it
const xg = bc => c => x(bc.x + c.x/BITS) 
const yg = br => r => y(br.y + r.y/BITS)

// Game loop draw
const draw = () => {
  // clear
  ctx.fillStyle = 'rgb(0, 0, 0)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // draw paths
  ctx.fillStyle = 'rgb(96, 64, 32)'
  ctx.fillRect(0, 0, x(COLS), canvas.height)
  
  // draw maze
  ctx.fillStyle = 'rgb(39,97,28)'
  WALLS.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

  if (state.lives.length != 0){
    // draw lives
    state.lives.map((p1, i) => {
      // Only 2 of the 3 lives are shown
      if(state.lives.length > i + 1){
        LIVE.map(p2 => {
          ctx.fillStyle = p2.colour
          ctx.fillRect(xg(p1)(p2), yg(p1)(p2), x(p2.l/BITS), y(1/BITS))
        })
      }
    })
  }
  
  if (state.apples.length != 0){
    // draw apples
    state.apples.map(p1 => {
      APPLE.map(p2 => {
        ctx.fillStyle = p2.colour
        ctx.fillRect(xg(p1)(p2), yg(p1)(p2), x(p2.l/BITS), y(1/BITS))
      })
    })
  }

  if (state.eggs.length != 0){
    // draw eggs
    state.eggs.map(p1 => {
      ctx.fillStyle = 'rgb(255,255,255)'
      ctx.fillRect(x(p1.x), y(p1.y), x(1), y(1))
      //EGG.map(p2 => {
      //  ctx.fillStyle = p2.colour
      //  ctx.fillRect(xg(p1)(p2), yg(p1)(p2), x(p2.l/BITS), y(1/BITS))
      //})
    })
  }
  
  // draw Birds
  EAGLE.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[0])(p), yg(state.birds[0])(p), x(p.l/BITS), y(1/BITS))
  })
  if (isFrightened(state)(0)){
    EAGLESCARED.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.birds[0])(p), yg(state.birds[0])(p), x(p.l/BITS), y(1/BITS))
    })
  }
  
  SECY.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[1])(p), yg(state.birds[1])(p), x(p.l/BITS), y(1/BITS))
  })
  if (isFrightened(state)(1)){
    SECYSCARED.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.birds[1])(p), yg(state.birds[1])(p), x(p.l/BITS), y(1/BITS))
    })
  }
 
  GUINE.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[2])(p), yg(state.birds[2])(p), x(p.l/BITS), y(1/BITS))
  })
  if (isFrightened(state)(2)){
    GUINESCARED.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.birds[2])(p), yg(state.birds[2])(p), x(p.l/BITS), y(1/BITS))
    })
  }

  OWL.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[3])(p), yg(state.birds[3])(p), x(p.l/BITS), y(1/BITS))
  })
  if (isFrightened(state)(3)){
    OWLSCARED.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.birds[3])(p), yg(state.birds[3])(p), x(p.l/BITS), y(1/BITS))
    })
  }

  // add crash
  if (state.snake.length == 0){
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(0, 0, x(COLS), canvas.height)
  } else {
    // draw snake
    SNAKE.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.snake[0])(p), yg(state.snake[0])(p), x(p.l/BITS), y(1/BITS))
    })
  }

  // add win
  if ((state.apples.length == 0) && (state.eggs.length == 0)){
    // If all apples have been collected, the screen flashes green
    ctx.fillStyle = 'rgb(0,255,0)'
    ctx.fillRect(0, 0, x(COLS), canvas.height)
  }
}
// Game loop update
const step = t1 => t2 => {
  if (t2 - t1 > 240) {
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
    case 'w': case 'h':  state = enqueue(state, NORTH); break
    case 'a': case 'j':  state = enqueue(state, WEST);  break
    case 's': case 'k':  state = enqueue(state, SOUTH); break
    case 'd': case 'l':  state = enqueue(state, EAST);  break
    default:
    e.preventDefault()
    return
  }
})

// Main
draw(); window.requestAnimationFrame(step(0))
