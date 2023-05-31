let alfa, v;
//let x;

let G = 9.81;

function setX(xx) {
    x = xx;
}

function setAlfa(alfaFun) {
    if(alfaFun > 0 && alfaFun < 90)
        alfa = alfaFun;
}
function setV(vv) {
    if(vv > 0)
        v = vv;
}

function setVal(angoloo, v22) {
    if(angoloo > 0 && angoloo < 90 && v22 > 0) {
        alfa = angoloo;
        v = v22;
    }
}

function calcolaAltezza() {
    let rad = radianti(alfa);
    return (int) ((Math.pow(v, 2) * Math.pow(Math.sin(rad), 2)) / (2 * G));
}

function calcolaGittata() {
    let rad = radianti(alfa);
    return (int) ((2 * Math.pow(v, 2) * Math.cos(rad) * Math.sin(rad)) / G);
}

function calcolaY(x, alfa, v) {
    let rad = radianti(alfa);
    let y = (-(G / (2 * Math.pow(v, 2) * Math.pow(Math.cos(rad), 2)) * Math.pow(x, 2))) +  Math.tan(rad) * x;

    if(y >= -50) {
        return y;
    }
    else
        return -1;
}

function radianti(gradi) {
    return (gradi * Math.PI) / 180;
}