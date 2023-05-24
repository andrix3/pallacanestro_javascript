let angolo, velocita;
let isCanestro;   //true - false

let curX, curY;   //dalla palla

let centroCanestroX1;
let centroCanestroX2;
let centroCanestroY;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("but").addEventListener("click", () => {
    canestro();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("reset").addEventListener("click", () => {
    reset();
  });
});

function controlloCanestro(x, y) {
  //System.out.println("cx1: " + centroCanestroX1 + "\tcx1: " + centroCanestroX2 + "\ty:" + centroCanestroY);
  //System.out.println("x: " + (x ) + "\t\ty: " + (y));
  
  if(centroCanestroY == y && centroCanestroX1 <= x.toFixed(0) && centroCanestroX2 >= x.toFixed(0)) {
    System.err.println("true");
    return true;
  } else {
    return false;
  }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function canestro() {
  let x = y = 0;
  
  console.log("heòòo")

  angolo = document.getElementById("angolo").value;
  velocita = document.getElementById("velocita").value;

  setVal(angolo, velocita);
  isCanestro = false;

  //let gittata = calcolaGittata;
  var id = null;

  var elem = document.getElementById("palla");  

  var pos = 200;
  elem.style.top = pos + 'px'; 
  elem.style.left = pos + 'px'; 

  clearInterval(id);
   
   /* if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }*/

  curY = 500;
  curX = 100;

  id = setInterval(frame, 50);
  function frame() {
    y = calcolaY(x, angolo, velocita);
    console.log(y);

    if (y != -1) {
      if(controlloCanestro(x, y.toFixed(0))){
        isCanestro = true;
      }

      //sleep
      sleep(5);

      console.log(curY, "fffff");
      elem.style.top = curY - y + 'px'; 
      elem.style.left = curX + x + 'px';

      curX = curY - y;
      curY = curX + x;
  
    }else{
      clearInterval(id);
    }

    x += 0.3;

    //setPalla    
  } 
}

function reset(){
  var elem = document.getElementById("palla");  

  elem.style.top = 500 + 'px'; 
  elem.style.left = 100 + 'px'; 

  var elem = document.getElementById("canestro");  

  elem.style.top = 100 + 'px'; 
  elem.style.left = 500 + 'px'; 
  
  curY = 500;
  curX = 100;

  console.log(curY, "jkjk");
}