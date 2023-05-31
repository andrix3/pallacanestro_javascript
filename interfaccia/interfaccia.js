let angolo, velocita;
let isCanestro;   //true - false

let curX, curY;   //dalla palla

var id = null;
var notifica = false;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("but").addEventListener("click", () => {
    let x = y = 0;
  
    angolo = document.getElementById("angolo").value;
    velocita = document.getElementById("velocita").value;
  
    setVal(angolo, velocita);
    isCanestro = false;
    notifica = false;
  
    var elem = document.getElementById("palla");  
  
    clearInterval(id);
  
    curY = 500;
    curX = 100;
  
    id = setInterval(frame, 50);

    function frame () {
      y = calcolaY(x, angolo, velocita);
      console.log(y);
  
      if (y != -1) {
        var centro = document.getElementById("centro");
        var palla = document.getElementById("palla"); 
  
        isCanestro = sonoSovrapposti(centro, palla);
        
        if(isCanestro && !notifica){
          alert("Hai fatto canestro :)");
          notifica = true;
        }
        
        curY = curY - y;
        curX = curX + x;
  
        elem.style.top = (curY) + 'px'; 
        elem.style.left = (curX) + 'px';
  
      }else{
        clearInterval(id);
  
        if(!isCanestro && !notifica)
          alert("Non hai fatto canestro :(");
      }
  
      x += 0.3; 
    }
  });
  document.getElementById("reset").addEventListener("click", () => {
    var elem = document.getElementById("palla");  
  
    elem.style.top = 600 + 'px'; 
    elem.style.left = 100 + 'px'; 
    
    curY = 600;
    curX = 100;
  
    clearInterval(id);
  });
});

function sonoSovrapposti(img1, img2) {
  // Ottieni le posizioni dei bordi delle immagini
  const img1Rect = img1.getBoundingClientRect();
  const img2Rect = img2.getBoundingClientRect();

  // Verifica se le immagini si sovrappongono sugli assi x e y
  const overlappingX = img1Rect.left < img2Rect.right && img1Rect.right > img2Rect.left;
  const overlappingY = img1Rect.top < img2Rect.bottom && img1Rect.bottom > img2Rect.top;

  // Restituisci true se le immagini si sovrappongono, altrimenti false
  return overlappingX && overlappingY;
}