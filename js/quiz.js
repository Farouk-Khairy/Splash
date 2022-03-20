let q1 = document.getElementById("ans2");
let q2 = document.getElementById("ans8");
let q3 = document.getElementById("ans10");
let q4 = document.getElementById("ans15");
let q5 = document.getElementById("ans17");
let q6 = document.getElementById("ans24");
let q7 = document.getElementById("ans25");
let q8 = document.getElementById("ans30");
let q9 = document.getElementById("ans35");
let q10 = document.getElementById("ans40");
function finalResutlt() {
  let score = 0;
  if (q1.checked) {
    score++;
  }
  if (q2.checked) {
    score++;
  }
  if (q3.checked) {
    score++;
  }
  if (q4.checked) {
    score++;
  }
  if (q5.checked) {
    score++;
  }
  if (q6.checked) {
    score++;
  }
  if (q7.checked) {
    score++;
  }
  if (q8.checked) {
    score++;
  }
  if (q9.checked) {
    score++;
  }
  if (q10.checked) {
    score++;
  }
  if (score > 6) {
    console.log(score);
    console.log("you are passed");
    window.open("../../pages/quize/win.html");
  } else {
    console.log(score);
    console.log("you are looser");
    window.open("../../pages/quize/loose.html");
  }
}
