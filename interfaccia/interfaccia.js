let angolo, velocita;
let isCanestro;   //true - false

let centroCanestroX1;
let centroCanestroX2;
let centroCanestroY;

document. addEventListener("DOMContentLoaded", () => {
  document.getElementById("but").addEventListener("click", () => {
    canestro();
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function canestro() {
  let x = y = 0;
  let xPos = yPos = 0;
  const elem = document.getElementById("palla");

  angolo = document.getElementById("angolo");
  velocita = document.getElementById("velocita");

  setVal(angolo, velocita);
  canestro = false;

  //let gittata = calcolaGittata;

  do {
    if (y != -1) {
      if(controlloCanestro(x, y.toFixed(0))){
        isCanestro = true;
      }

      //sleep
      sleep(5);
    }else{
      break;
    }

    x += 0.3;

    //setPalla
    elem.style.top = yPos - y + "px";
    elem.style.left = xPos + x + "px";
    console.log("spostato", x, y)
  } while(y > 0);
}