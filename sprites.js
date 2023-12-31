// Art "Sprites"
const LIVE = [
  {x: 3, y: 1, l: 3, colour: 'rgb(0,0,0)'},
  {x:10, y: 1, l: 3, colour: 'rgb(0,0,0)'},

  {x: 2, y: 2, l: 5, colour: 'rgb(0,0,0)'},
  {x: 3, y: 2, l: 3, colour: 'rgb(255,0,0)'},
  {x: 9, y: 2, l: 5, colour: 'rgb(0,0,0)'},
  {x:10, y: 2, l: 3, colour: 'rgb(255,0,0)'},

  {x: 1, y: 3, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 3, l:12, colour: 'rgb(255,0,0)'},
  {x: 7, y: 3, l: 2, colour: 'rgb(0,0,0)'},
  {x: 4, y: 3, l: 1, colour: 'rgb(255,255,255)'},

  {x: 1, y: 4, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 4, l:12, colour: 'rgb(255,0,0)'},
  {x: 3, y: 4, l: 2, colour: 'rgb(255,255,255)'},

  {x: 1, y: 5, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 5, l:12, colour: 'rgb(255,0,0)'},
  {x: 3, y: 5, l: 1, colour: 'rgb(255,255,255)'},

  {x: 1, y: 6, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 6, l:12, colour: 'rgb(255,0,0)'},
  {x: 1, y: 7, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 7, l:12, colour: 'rgb(255,0,0)'},

  {x: 2, y: 8, l:12, colour: 'rgb(0,0,0)'},
  {x: 3, y: 8, l:10, colour: 'rgb(255,0,0)'},

  {x: 3, y: 9, l:10, colour: 'rgb(0,0,0)'},
  {x: 4, y: 9, l: 8, colour: 'rgb(255,0,0)'},

  {x: 4, y:10, l: 8, colour: 'rgb(0,0,0)'},
  {x: 5, y:10, l: 6, colour: 'rgb(255,0,0)'},

  {x: 5, y:11, l: 6, colour: 'rgb(0,0,0)'},
  {x: 6, y:11, l: 4, colour: 'rgb(255,0,0)'},

  {x: 6, y:12, l: 4, colour: 'rgb(0,0,0)'},
  {x: 7, y:12, l: 2, colour: 'rgb(255,0,0)'},

  {x: 7, y:13, l: 2, colour: 'rgb(0,0,0)'},
]

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

const GUINESCARED = [
{x: 6, y: 2, l: 1, colour: 'rgb(73,135,196)'},  
{x:11, y: 2, l: 1, colour: 'rgb(73,135,196)'},

{x: 4, y: 3, l: 1, colour: 'rgb(73,135,196)'}, 
  
{x: 1, y: 4, l: 1, colour: 'rgb(73,135,196)'},  
{x:10, y: 4, l: 1, colour: 'rgb(73,135,196)'},
{x:13, y: 4, l: 1, colour: 'rgb(73,135,196)'},  
  
{x: 5, y: 5, l: 1, colour: 'rgb(73,135,196)'}]

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
{x: 5, y: 7, l: 6, colour: 'rgb(255,255,255)'},
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

const SECYSCARED = [
{x: 6, y: 2, l: 1, colour: 'rgb(73,135,196)'},  
{x:11, y: 2, l: 1, colour: 'rgb(73,135,196)'},

{x: 4, y: 3, l: 1, colour: 'rgb(73,135,196)'}, 
  
{x: 1, y: 4, l: 1, colour: 'rgb(73,135,196)'},  
{x:10, y: 4, l: 1, colour: 'rgb(73,135,196)'},
{x:13, y: 4, l: 1, colour: 'rgb(73,135,196)'},  
  
{x: 5, y: 5, l: 1, colour: 'rgb(73,135,196)'}]

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

const OWLSCARED = [
{x: 6, y: 0, l: 1, colour: 'rgb(73,135,196)'},  
  
{x: 9, y: 1, l: 1, colour: 'rgb(73,135,196)'},
{x:14, y: 1, l: 1, colour: 'rgb(73,135,196)'}, 
  
{x: 1, y: 2, l: 1, colour: 'rgb(73,135,196)'}, 
  
{x: 5, y: 3, l: 1, colour: 'rgb(73,135,196)'},
  
{x:13, y: 4, l: 1, colour: 'rgb(73,135,196)'}]

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

const EAGLESCARED = [
{x: 6, y: 0, l: 1, colour: 'rgb(73,135,196)'},  
{x:11, y: 0, l: 1, colour: 'rgb(73,135,196)'},

{x: 4, y: 1, l: 1, colour: 'rgb(73,135,196)'}, 
  
{x: 1, y: 2, l: 1, colour: 'rgb(73,135,196)'},  
{x:10, y: 2, l: 1, colour: 'rgb(73,135,196)'},
{x:13, y: 2, l: 1, colour: 'rgb(73,135,196)'},  
  
{x: 5, y: 3, l: 1, colour: 'rgb(73,135,196)'}]

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

  {x: 4, y: 7, l: 8, colour: 'rgb(0,0,0)'},
  {x: 5, y: 7, l: 6, colour: 'rgb(255,0,00)'},
  {x: 7, y: 7, l: 2, colour: 'rgb(0,0,00)'},

  {x: 3, y: 8, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 8, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y: 9, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y: 9, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y:10, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y:10, l: 8, colour: 'rgb(255,0,00)'},
  {x: 3, y:11, l:10, colour: 'rgb(0,0,00)'},
  {x: 4, y:11, l: 8, colour: 'rgb(255,0,00)'},

  {x: 4, y:12, l: 8, colour: 'rgb(0,0,00)'},
  {x: 5, y:12, l: 6, colour: 'rgb(255,0,00)'},
  {x: 4, y:13, l: 8, colour: 'rgb(0,0,00)'},
  {x: 5, y:13, l: 6, colour: 'rgb(255,0,00)'},
  {x: 7, y:13, l: 2, colour: 'rgb(0,0,00)'},

  {x: 5, y:14, l: 2, colour: 'rgb(0,0,00)'},
  {x: 9, y:14, l: 2, colour: 'rgb(0,0,00)'}]

const EGG = [
  {x: 6, y: 2, l: 4, colour: 'rgb(0,0,00)'},
  {x: 5, y: 3, l: 6, colour: 'rgb(0,0,00)'},
  {x: 6, y: 3, l: 4, colour: 'rgb(255,255,255)'},

  {x: 4, y: 4, l: 8, colour: 'rgb(0,0,00)'}, 
  {x: 5, y: 4, l: 6, colour: 'rgb(255,255,255)'},
  {x: 4, y: 5, l: 8, colour: 'rgb(0,0,00)'}, 
  {x: 5, y: 5, l: 6, colour: 'rgb(255,255,255)'},

  {x: 5, y: 5, l: 1, colour: 'rgb(0,165,5)'},
  {x: 9, y: 5, l: 2, colour: 'rgb(0,165,5)'},

  {x: 3, y: 6, l:10, colour: 'rgb(0,0,00)'}, 
  {x: 4, y: 6, l: 8, colour: 'rgb(255,255,255)'},
  {x: 4, y: 6, l: 1, colour: 'rgb(164,164,164)'},
  {x: 9, y: 6, l: 2, colour: 'rgb(0,165,5)'},
 
  {x: 3, y: 7, l:10, colour: 'rgb(0,0,00)'}, 
  {x: 4, y: 7, l: 8, colour: 'rgb(255,255,255)'},
  {x: 4, y: 7, l: 1, colour: 'rgb(164,164,164)'},

  {x: 3, y: 8, l:10, colour: 'rgb(0,0,00)'}, 
  {x: 4, y: 8, l: 8, colour: 'rgb(255,255,255)'},
  {x: 4, y: 8, l: 1, colour: 'rgb(164,164,164)'},
  {x: 6, y: 8, l: 1, colour: 'rgb(0,165,5)'},
  {x: 2, y: 9, l:12, colour: 'rgb(0,0,00)'}, 
  {x: 4, y: 9, l: 8, colour: 'rgb(255,255,255)'},
  {x: 4, y: 9, l: 2, colour: 'rgb(164,164,164)'},
  {x: 9, y: 9, l: 1, colour: 'rgb(0,165,5)'},

  {x: 1, y:10, l:14, colour: 'rgb(0,0,00)'}, 
  {x: 5, y:10, l: 6, colour: 'rgb(164,164,164)'},
  {x: 2, y:10, l: 1, colour: 'rgb(220,181,121)'}, 
  {x:13, y:10, l: 1, colour: 'rgb(220,181,121)'},
  
  {x: 1, y:11, l:14, colour: 'rgb(0,0,00)'}, 
  {x: 2, y:11, l: 2, colour: 'rgb(220,181,121)'}, 
  {x:12, y:11, l: 2, colour: 'rgb(220,181,121)'},
  {x:13, y:11, l: 1, colour: 'rgb(106,87,58)'}, 
  {x: 2, y:11, l: 1, colour: 'rgb(106,87,58)'}, 

  {x: 2, y:12, l:12, colour: 'rgb(0,0,00)'}, 
  {x: 3, y:12, l:10, colour: 'rgb(220,181,121)'}, 
  {x: 8, y:12, l: 2, colour: 'rgb(106,87,58)'}, 

  {x: 3, y:13, l:10, colour: 'rgb(0,0,00)'}, 
  {x: 4, y:13, l: 8, colour: 'rgb(220,181,121)'}, 
  {x: 5, y:13, l: 1, colour: 'rgb(106,87,58)'},
  {x: 4, y:14, l: 8, colour: 'rgb(0,0,0)'}
]

const SPRITE_WALL = [
  {x: 1, y: 1, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y: 2, l:12, colour: 'rgb(39,97,28)'}
]
 
const WALL_WEST = [
  {x:-2, y: 1, l:14, colour: 'rgb(0,0,0)'},   //14 y
  {x:-2, y: 2, l:12, colour: 'rgb(39,97,28)'} //12 y
]

const WALL_NORTH = [
  {x: 1, y:-1, l:14, colour: 'rgb(0,0,0)'},
  {x: 1, y: 0, l:14, colour: 'rgb(0,0,0)'},
  {x: 2, y:-2, l:12, colour: 'rgb(39,97,28)'},
  {x: 2, y:-1, l:12, colour: 'rgb(39,97,28)'},
  {x: 2, y: 0, l:12, colour: 'rgb(39,97,28)'},
  {x: 2, y: 1, l:12, colour: 'rgb(39,97,28)'}
]

const BASKET = [
  {x: 9, y: 1, l: 4, colour: 'rgb(141,141,102)'},
  {x:11, y: 1, l: 1, colour: 'rgb(141,141,102)'},

  {x: 1, y: 2, l: 1, colour: 'rgb(141,141,102)'},
  {x: 5, y: 2, l: 2, colour: 'rgb(141,141,102)'},

  {x: 1, y: 3, l: 1, colour: 'rgb(141,141,102)'},
  {x: 6, y: 3, l: 1, colour: 'rgb(141,141,102)'},
  {x:10, y: 3, l: 1, colour: 'rgb(141,141,102)'},

  {x:11, y: 4, l: 1, colour: 'rgb(141,141,102)'},
  {x:14, y: 4, l: 1, colour: 'rgb(141,141,102)'},

  {x: 3, y: 5, l: 1, colour: 'rgb(141,141,102)'},
  {x:11, y: 5, l: 1, colour: 'rgb(141,141,102)'},

  {x: 2, y: 6, l: 1, colour: 'rgb(141,141,102)'},
  {x: 7, y: 6, l: 1, colour: 'rgb(141,141,102)'},
  {x:12, y: 6, l: 1, colour: 'rgb(141,141,102)'},

  {x: 2, y: 7, l: 1, colour: 'rgb(141,141,102)'},
  {x:13, y: 7, l: 1, colour: 'rgb(141,141,102)'},

  {x: 1, y: 8, l: 1, colour: 'rgb(141,141,102)'},
  {x: 5, y: 8, l: 3, colour: 'rgb(141,141,102)'},

  {x: 1, y: 9, l: 1, colour: 'rgb(141,141,102)'},
  {x:10, y: 9, l: 1, colour: 'rgb(141,141,102)'},

  {x: 1, y:10, l: 1, colour: 'rgb(141,141,102)'},
  {x:10, y:10, l: 1, colour: 'rgb(141,141,102)'},

  {x: 3, y:11, l: 1, colour: 'rgb(141,141,102)'},
  {x:12, y:11, l: 1, colour: 'rgb(141,141,102)'},

  {x: 2, y:12, l: 2, colour: 'rgb(141,141,102)'},
  {x: 6, y:12, l: 4, colour: 'rgb(141,141,102)'},
  {x:13, y:12, l: 1, colour: 'rgb(141,141,102)'},

  {x: 1, y:13, l: 1, colour: 'rgb(141,141,102)'},
  {x: 5, y:13, l: 1, colour: 'rgb(141,141,102)'},
  {x:12, y:13, l: 1, colour: 'rgb(141,141,102)'},

  {x: 9, y:14, l: 2, colour: 'rgb(141,141,102)'}, 
]

const BLUEBERRY = [ 
  {x: 6, y: 4, colour: 'rgb(30,30,255)'},
  {x:11, y:11, colour: 'rgb(30,30,255)'},
  {x: 9, y: 6, colour: 'rgb(30,30,255)'},
  {x: 3, y: 9, colour: 'rgb(30,30,255)'}
]

const RASPBERRY = [
  {x: 6, y: 4, colour: 'rgb(255,30,30)'},
  {x: 6, y: 5, colour: 'rgb(255,30,30)'},
  {x: 6, y: 6, colour: 'rgb(155,30,30)'},

  {x:11, y:10, colour: 'rgb(255,30,30)'},
  {x:11, y:11, colour: 'rgb(255,30,30)'},
  {x:11, y:12, colour: 'rgb(155,30,30)'},

  {x: 9, y: 6, colour: 'rgb(255,30,30)'},
  {x: 9, y: 7, colour: 'rgb(255,30,30)'},
  {x: 9, y: 8, colour: 'rgb(155,30,30)'},

  {x: 3, y: 9, colour: 'rgb(255,30,30)'},
  {x: 3, y:10, colour: 'rgb(255,30,30)'},
  {x: 3, y:11, colour: 'rgb(155,30,30)'}
]

module.exports = {RASPBERRY,BLUEBERRY,BASKET,SPRITE_WALL,LIVE,GUINE,GUINESCARED,SECY,SECYSCARED,OWL,OWLSCARED,EAGLE,EAGLESCARED,SNAKE,APPLE,EGG,WALL_NORTH,WALL_WEST}
