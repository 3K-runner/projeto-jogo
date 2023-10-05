const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Constant that represents the art grid size
const BITS = 16

// Art "Sprites"
const GUINE = [{x: 7, y: 2, l: 2, colour: 'rgb(56,56,56)'},
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

const SECY = [
{x: 6, y: 2, l: 1, colour: 'rgb(0,0,0)'},
{x: 9, y: 2, l: 1, colour: 'rgb(0,0,0)'},
{x:12, y: 2, l: 1, colour: 'rgb(0,0,0)'},
{x: 5, y: 3, l: 1, colour: 'rgb(0,0,0)'},
{x: 8, y: 3, l: 1, colour: 'rgb(0,0,0)'},
{x:11, y: 3, l: 1, colour: 'rgb(0,0,0)'},

{x: 5, y: 4, l: 6, colour: 'rgb(0,0,0)'},

{x: 4, y: 5, l: 8, colour: 'rgb(0,0,0)'},
{x: 5, y: 5, l: 6, colour: 'rgb(165,165,165)'},

{x: 3, y: 6, l:10, colour: 'rgb(0,0,0)'},
{x: 4, y: 6, l: 8, colour: 'rgb(165,165,165)'},
{x: 5, y: 6, l: 2, colour: 'rgb(255,255,255)'},
{x: 9, y: 6, l: 2, colour: 'rgb(255,255,255)'},

{x: 2, y: 7, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y: 7, l: 8, colour: 'rgb(165,165,165)'},
{x: 5, y: 7, l: 1, colour: 'rgb(255,255,255)'},
{x: 6, y: 7, l: 4, colour: 'rgb(0,0,0)'},
{x: 7, y: 7, l: 2, colour: 'rgb(214,173,34)'},

{x: 1, y: 8, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 8, l:12, colour: 'rgb(165,165,165)'},
{x: 3, y: 8, l:10, colour: 'rgb(0,0,0)'},
{x: 4, y: 8, l: 8, colour: 'rgb(165,165,165)'},
{x: 5, y: 8, l: 6, colour: 'rgb(165,20,17)'},
{x: 7, y: 8, l: 2, colour: 'rgb(214,173,34)'},

{x: 1, y: 9, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 9, l:12, colour: 'rgb(165,165,165)'},
{x: 3, y: 9, l:10, colour: 'rgb(0,0,0)'}, 
{x: 4, y: 9, l: 8, colour: 'rgb(165,165,165)'},
{x: 7, y: 9, l: 2, colour: 'rgb(165,20,17)'},

{x: 1, y:10, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y:10, l:12, colour: 'rgb(165,165,165)'},
{x: 3, y:10, l:10, colour: 'rgb(0,0,0)'}, 
{x: 4, y:10, l: 8, colour: 'rgb(165,165,165)'},

{x: 2, y:11, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y:11, l: 8, colour: 'rgb(165,165,165)'},
{x: 6, y:11, l: 4, colour: 'rgb(255,255,255)'},

{x: 4, y:12, l: 8, colour: 'rgb(0,0,0)'},
{x: 5, y:12, l: 6, colour: 'rgb(255,255,255)'},
{x: 6, y:12, l: 4, colour: 'rgb(0,0,0)'},

{x: 5, y:13, l: 1, colour: 'rgb(0,0,0)'}, 
{x:10, y:13, l: 1, colour: 'rgb(0,0,0)'},

{x: 5, y:14, l: 1, colour: 'rgb(0,0,0)'},
{x:10, y:14, l: 1, colour: 'rgb(0,0,0)'}, 

{x: 4, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 6, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 9, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x:11, y:15, l: 1, colour: 'rgb(0,0,0)'},
]

const OWL = [
{x: 4, y: 1, l: 1, colour: 'rgb(00,00,00)'},
{x:11, y: 1, l: 1, colour: 'rgb(00,00,00)'},

{x: 4, y: 2, l: 1, colour: 'rgb(00,00,00)'},
{x: 5, y: 2, l: 2, colour: 'rgb(083,054,006)'},
{x: 9, y: 2, l: 2, colour: 'rgb(083,054,006)'},
{x:11, y: 2, l: 1, colour: 'rgb(00,00,00)'},

{x: 5, y: 3, l: 6, colour: 'rgb(00,00,00)'},
{x: 6, y: 3, l: 4, colour: 'rgb(083,054,006)'},

{x: 4, y: 4, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 4, l: 6, colour: 'rgb(215,170,093)'},
{x: 6, y: 4, l: 4, colour: 'rgb(00,00,00)'},
{x: 7, y: 4, l: 2, colour: 'rgb(083,054,006)'},

{x: 4, y: 5, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 5, l: 6, colour: 'rgb(255,255,255)'},
{x: 7, y: 5, l: 2, colour: 'rgb(215,170,093)'},

{x: 4, y: 6, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 6, l: 6, colour: 'rgb(255,255,255)'},
{x: 6, y: 6, l: 4, colour: 'rgb(00,00,00)'},
{x: 7, y: 6, l: 2, colour: 'rgb(215,170,093)'},

{x: 3, y: 7, l:10, colour: 'rgb(00,00,00)'},
{x: 5, y: 7, l: 6, colour: 'rgb(083,054,006)'},
{x: 6, y: 7, l: 4, colour: 'rgb(215,170,093)'},
{x: 7, y: 7, l: 2, colour: 'rgb(083,054,006)'},

{x: 2, y: 8, l:12, colour: 'rgb(00,00,00)'},
{x: 3, y: 8, l:10, colour: 'rgb(083,054,006)'},
{x: 7, y: 8, l: 2, colour: 'rgb(00,00,00)'},

{x: 1, y: 9, l:14, colour: 'rgb(00,00,00)'},
{x: 2, y: 9, l:12, colour: 'rgb(083,054,006)'},
{x: 4, y: 9, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 9, l: 6, colour: 'rgb(083,054,006)'},

{x: 1, y: 10, l:14, colour: 'rgb(00,00,00)'},
{x: 2, y: 10, l:12, colour: 'rgb(083,054,006)'},
{x: 3, y: 10, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 10, l: 8, colour: 'rgb(083,054,006)'},
{x: 7, y: 10, l: 2, colour: 'rgb(215,170,093)'},

{x: 2, y: 11, l:12, colour: 'rgb(00,00,00)'},
{x: 3, y: 11, l:10, colour: 'rgb(083,054,006)'},
{x: 6, y: 11, l: 4, colour: 'rgb(215,170,093)'},

{x: 3, y: 12, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 12, l: 8, colour: 'rgb(083,054,006)'},
{x: 5, y: 12, l: 6, colour: 'rgb(215,170,093)'},

{x: 4, y: 13, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 13, l: 6, colour: 'rgb(215,170,093)'},
{x: 6, y: 13, l: 4, colour: 'rgb(00,00,00)'},

{x: 5, y: 14, l: 1, colour: 'rgb(00,00,00)'},
{x:10, y: 14, l: 1, colour: 'rgb(00,00,00)'},

{x: 4, y: 15, l: 1, colour: 'rgb(00,00,00)'},
{x: 6, y: 15, l: 1, colour: 'rgb(00,00,00)'},
{x: 9, y: 15, l: 1, colour: 'rgb(00,00,00)'},
{x:11, y: 15, l: 1, colour: 'rgb(00,00,00)'},
]

const EAGLE = [{x: 5, y: 2, l: 6, colour: 'rgb(00,00,00)'},

{x: 4, y: 3, l: 8, colour: 'rgb(00,00,00)'},
{x: 5, y: 3, l: 6, colour: 'rgb(225,225,225)'},

{x: 3, y: 4, l:10, colour: 'rgb(0,0,0)'},
{x: 4, y: 4, l: 8, colour: 'rgb(225,225,225)'},
{x: 5, y: 4, l: 6, colour: 'rgb(291,197,143)'},
{x: 7, y: 4, l: 2, colour: 'rgb(225,225,225)'},

{x: 2, y: 5, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y: 5, l: 8, colour: 'rgb(225,225,225)'},
{x: 5, y: 5, l: 6, colour: 'rgb(291,197,143)'},
{x: 6, y: 5, l: 4, colour: 'rgb(00,00,00)'},
{x: 7, y: 5, l: 2, colour: 'rgb(255,255,00)'},

{x: 1, y: 6, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 6, l:12, colour: 'rgb(062,062,062)'}, 
{x: 3, y: 6, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 6, l: 8, colour: 'rgb(225,225,225)'},
{x: 7, y: 6, l: 2, colour: 'rgb(255,255,0)'},

{x: 1, y: 7, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 7, l:12, colour: 'rgb(062,062,062)'}, 
{x: 3, y: 7, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 7, l: 8, colour: 'rgb(225,225,225)'},
{x: 7, y: 7, l: 2, colour: 'rgb(156,126,025)'},

{x: 1, y: 8, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 8, l:12, colour: 'rgb(062,062,062)'}, 
{x: 3, y: 8, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 8, l: 8, colour: 'rgb(225,225,225)'},

{x: 1, y: 9, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y: 9, l:12, colour: 'rgb(062,062,062)'}, 
{x: 3, y: 9, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y: 9, l: 8, colour: 'rgb(062,062,062)'},
{x: 5, y: 9, l: 6, colour: 'rgb(225,225,225)'},

{x: 1, y:10, l:14, colour: 'rgb(0,0,0)'},
{x: 2, y:10, l:12, colour: 'rgb(062,062,062)'}, 
{x: 3, y:10, l:10, colour: 'rgb(00,00,00)'},
{x: 4, y:10, l: 8, colour: 'rgb(062,062,062)'},
{x: 7, y:10, l: 2, colour: 'rgb(225,225,225)'},

{x: 2, y:11, l:12, colour: 'rgb(0,0,0)'},
{x: 4, y:11, l: 8, colour: 'rgb(062,062,062)'},

{x: 4, y:12, l: 8, colour: 'rgb(0,0,0)'}, 
{x: 5, y:12, l: 6, colour: 'rgb(062,062,062)'},
{x: 6, y:12, l: 4, colour: 'rgb(0,0,0)'},

{x: 5, y:13, l: 1, colour: 'rgb(0,0,0)'}, 
{x:10, y:13, l: 1, colour: 'rgb(0,0,0)'},

{x: 5, y:14, l: 1, colour: 'rgb(0,0,0)'},
{x:10, y:14, l: 1, colour: 'rgb(0,0,0)'}, 

{x: 4, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 6, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x: 9, y:15, l: 1, colour: 'rgb(0,0,0)'},
{x:11, y:15, l: 1, colour: 'rgb(0,0,0)'}]

const SNAKE = [
  {x: 5, y: 1, l: 6, colour: 'rgb(00,00,00)'},
 
  {x: 4, y: 2, l: 8, colour: 'rgb(00,00,00)'},
  {x: 5, y: 2, l: 6, colour: 'rgb(17,134,00)'},

  {x: 3, y: 3, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 3, l: 8, colour: 'rgb(17,134,00)'},
  {x: 5, y: 3, l: 2, colour: 'rgb(255,255,255)'},
  {x: 9, y: 3, l: 2, colour: 'rgb(255,255,255)'},

  {x: 3, y: 4, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 4, l: 8, colour: 'rgb(17,134,00)'},
  {x: 5, y: 4, l: 6, colour: 'rgb(255,255,255)'},
  {x: 6, y: 4, l: 4, colour: 'rgb(00,00,00)'},
  {x: 7, y: 4, l: 2, colour: 'rgb(17,134,00)'},

  {x: 3, y: 5, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 5, l: 8, colour: 'rgb(17,134,00)'},

  {x: 3, y: 6, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 6, l: 8, colour: 'rgb(17,134,00)'},
  {x: 5, y: 6, l: 6, colour: 'rgb(7,54,0)'},
 
  {x: 3, y: 7, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 7, l: 8, colour: 'rgb(17,134,00)'},
  {x: 6, y: 7, l: 4, colour: 'rgb(255,255,255)'},
  {x: 7, y: 7, l: 2, colour: 'rgb(155,36,25)'},

  {x: 3, y: 8, l:10, colour: 'rgb(00,00,00)'},
  {x: 4, y: 8, l: 8, colour: 'rgb(17,134,00)'},
  {x: 7, y: 8, l: 1, colour: 'rgb(155,36,25)'},
  {x:14, y: 8, l: 1, colour: 'rgb(00,00,00)'},
 
  {x: 4, y: 9, l: 8, colour: 'rgb(00,00,00)'},
  {x: 5, y: 9, l: 6, colour: 'rgb(17,134,00)'},
  {x:13, y: 9, l: 3, colour: 'rgb(00,00,00)'},
  {x:14, y: 9, l: 1, colour: 'rgb(17,134,00)'}, 
 
  {x: 5, y:10, l: 6, colour: 'rgb(00,00,00)'},
  {x: 6, y:10, l: 4, colour: 'rgb(17,134,00)'},
  {x:13, y:10, l: 3, colour: 'rgb(00,00,00)'},
  {x:14, y:10, l: 1, colour: 'rgb(17,134,00)'},

  {x: 3, y:11, l:12, colour: 'rgb(00,00,00)'},
  {x: 6, y:11, l: 4, colour: 'rgb(17,134,00)'},
  {x:13, y:11, l: 1, colour: 'rgb(17,134,00)'},

  {x: 2, y:12, l:12, colour: 'rgb(00,00,00)'},
  {x: 3, y:12, l: 2, colour: 'rgb(17,134,00)'},
  {x: 6, y:12, l: 4, colour: 'rgb(17,134,00)'},
  {x:11, y:12, l: 2, colour: 'rgb(17,134,00)'},

  {x: 1, y:13, l:14, colour: 'rgb(00,00,00)'},
  {x: 2, y:13, l: 3, colour: 'rgb(17,134,00)'},
  {x: 6, y:13, l: 4, colour: 'rgb(17,134,00)'},
  {x:11, y:13, l: 3, colour: 'rgb(17,134,00)'},

  {x: 1, y:14, l:14, colour: 'rgb(00,00,00)'},
  {x: 2, y:14, l: 3, colour: 'rgb(17,134,00)'},
  {x: 6, y:14, l: 4, colour: 'rgb(17,134,00)'},
  {x:11, y:14, l: 3, colour: 'rgb(17,134,00)'},

  {x: 1, y:15, l:14, colour: 'rgb(00,00,00)'},]

const APPLE = [
  {x: 8, y: 3, l: 1, colour: 'rgb(77,189,00)'},
  {x: 8, y: 4, l: 2, colour: 'rgb(77,189,00)'},
  {x: 7, y: 5, l: 2, colour: 'rgb(77,189,00)'},

  {x: 5, y: 6, l: 6, colour: 'rgb(00,00,00)'},
  {x: 7, y: 6, l: 2, colour: 'rgb(77,189,00)'},

  {x: 4, y: 7, l: 8, colour: 'rgb(0,0,0)}'},
  {x: 5, y: 7, l: 6, colour: 'rgb(255,0,00)'},
  {x: 7, y: 7, l: 2, colour: 'rgb(0,0,00)'},

  {x: 3, y: 8, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 8, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y: 9, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 9, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y: 10, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 10, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y: 11, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 11, l: 8, colour: 'rgb(255,0,00)'},

  {x: 4, y: 12, l: 8, colour: 'rgb(0,0,00)'},
  {x: 5, y: 12, l: 6, colour: 'rgb(255,0,00)'},
  {x: 4, y: 13, l: 8, colour: 'rgb(0,0,00)'},
  {x: 5, y: 13, l: 6, colour: 'rgb(255,0,00)'},
  {x: 7, y: 13, l: 2, colour: 'rgb(0,0,00)'},

  {x: 5, y: 14, l: 2, colour: 'rgb(0,0,00)'},
  {x: 9, y: 14, l: 2, colour: 'rgb(0,0,00)'}]
// Mutable state
let state = initialState()

// Position helpers
// for entire square
// -Takes a coordinate and resizes it for the canvas 
const x = c => Math.round(c * canvas.width / COLS) 
const y = r => Math.round(r * canvas.height / ROWS) 
// for grid art
// -Takes a coordinate and applies the grid on it
const xg = bc => c => x(bc.x + c.x/BITS) 
const yg = br => r => y(br.y + r.y/BITS)

// Game loop draw
const draw = () => {
  // clear
  ctx.fillStyle = 'rgb(96, 64, 32)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // draw maze
  ctx.fillStyle = 'rgb(39,97,28)'
  WALLS.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

 // add win
  if (state.apple.length == 0){
    // If all apples have been collected, the screen flashes green
    ctx.fillStyle = 'rgb(0,255,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  } else {
    // draw apples
    state.apple.map(p1 => {
      APPLE.map(p2 => {
        ctx.fillStyle = p2.colour
        ctx.fillRect(xg(p1)(p2), yg(p1)(p2), x(p2.l/BITS), y(1/BITS))
      })
    })
  }
 
  // draw Birds
  EAGLE.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[0])(p), yg(state.birds[0])(p), x(p.l/BITS), y(1/BITS))
  })
  
  SECY.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[1])(p), yg(state.birds[1])(p), x(p.l/BITS), y(1/BITS))
  })
 
  GUINE.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[2])(p), yg(state.birds[2])(p), x(p.l/BITS), y(1/BITS))
  })

  OWL.map(p => {
    ctx.fillStyle = p.colour
    ctx.fillRect(xg(state.birds[3])(p), yg(state.birds[3])(p), x(p.l/BITS), y(1/BITS))
  })

  // add crash
  if (state.snake.length == 0){
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  } else {
    // draw snake
    SNAKE.map(p => {
      ctx.fillStyle = p.colour
      ctx.fillRect(xg(state.snake[0])(p), yg(state.snake[0])(p), x(p.l/BITS), y(1/BITS))
    })
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
