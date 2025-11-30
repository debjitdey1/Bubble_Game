var timer = 60;
var score = 0;
var hitrn = 0;
function incrementScore() {
  score += 10;
  document.querySelector("#scoreid").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitnum").textContent = hitrn;
}
function makeBubble() {
  var clutter = ""; // Generate bubbles numbered from 1 to 90
  for (var i = 1; i <= 90; i++) {
    let vn = Math.floor(Math.random() * 10); //(math.floor) is a single value and (math.random) generates a random number between 0 and 1
    clutter += `<div class="bubble"> ${vn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerinter").textContent = timer;
    } else {
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
      clearInterval(timerInterval);
    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    incrementScore();
    makeBubble();
    getNewHit();
  }
  //   alert("Yes, it is working");
});
runTimer();
makeBubble();
getNewHit();
incrementScore();
