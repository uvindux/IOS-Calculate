let previous;
let op;
let secondSave;
let fistSave;
function fn0() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '0';
}
function fn1() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '1';
}
function fn2() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '2';
}
function fn3() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '3';
}
function fn4() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '4';
}
function fn5() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '5';
}
function fn6() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '6';
}
function fn7() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '7';
}
function fn8() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '8';
}
function fn9() {
          let previous = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = previous + '9';
}
function feraser() {
          let previous = document.getElementById("display").innerHTML;
          let eraser = previous.slice(0, -1);
          document.getElementById("display").innerHTML = eraser;

}
function addition() {
          fistSave = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = "";
          op = 1;



}
function min() {
          fistSave = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = "";
          op = 2;



}
function multi() {
          fistSave = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = "";
          op = 3;



}
function divi() {
          fistSave = document.getElementById("display").innerHTML;
          document.getElementById("display").innerHTML = "";
          op = 4;



}
function precentage() {
          fistSave = document.getElementById("display").innerHTML;

          op = 5;



}
function minus() {
          fistSave = document.getElementById("display").innerHTML;

          op = 6;



}
function eq() {
          secondSave = document.getElementById("display").innerHTML;
          if (op == 1) {
                    let answer = parseInt(fistSave) + parseInt(secondSave);
                    document.getElementById("display").innerHTML = answer;

          }
          else if (op == 2) {
                    let answer = parseInt(fistSave) - parseInt(secondSave);
                    document.getElementById("display").innerHTML = answer;

          }
          else if (op == 3) {
                    let answer = parseInt(fistSave) * parseInt(secondSave);
                    document.getElementById("display").innerHTML = answer;


          }
          else if (op == 4) {
                    let answer = parseInt(fistSave) / parseInt(secondSave);
                    document.getElementById("display").innerHTML = answer;


          }
          else if (op == 5) {
                    let answer = parseInt(fistSave) / 100;
                    document.getElementById("display").innerHTML = answer;





          }
          else {
                    let answer = parseInt(fistSave)*-1;
                    document.getElementById("display").innerHTML = answer;

          }



}



