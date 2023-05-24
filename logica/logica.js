let alfa, v;
let x;

let G = 9.81;

function setX(x) {
  this.x = x;
}

function setAlfa(alfa) {
  if (alfa > 0 && alfa < 90)
    this.alfa = alfa;
}
function setV(v) {
  if (v > 0)
    this.v = v;
}

function setVal(angolo, v2) {
  if (angolo > 0 && angolo < 90 && v2 > 0) {
    this.alfa = angolo;
    this.v = v2;
  }
}

function calcolaAltezza() {
  let rad = radianti(alfa);
  return (int)((Math.pow(v, 2) * Math.pow(Math.sin(rad), 2)) / (2 * G));
}

function calcolaGittata() {
  let rad = radianti(alfa);
  return (int)((2 * Math.pow(v, 2) * Math.cos(rad) * Math.sin(rad)) / G);
}

function calcolaY() {
  let rad = radianti(alfa);
  let y = (-(G / (2 * Math.pow(v, 2) * Math.pow(Math.cos(rad), 2)) * Math.pow(x, 2))) + Math.tan(rad) * x;

  if (y >= 0) {
    return y;
  }
  else
    return -1;
}

function radianti(gradi) {
  return (gradi * Math.PI) / 180;
}