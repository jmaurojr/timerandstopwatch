let sec = 0;
let min = 0;

function start() {
  setInterval(watch, 100);
}

function watch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  document.getElementById("numbers").innerText = `${min}:${sec}`;
}

/* document.getElementById("temaAzul").addEventListener("click", function () {
  document.querySelector("div.sqr1").setAttribute("class", "sqr1bl");
});

document.getElementById("temaAzul").addEventListener("click", function () {
  document.querySelector("div.sqr2").setAttribute("class", "sqr2bl");
});

document.getElementById("temaAzul").addEventListener("click", function () {
  document.querySelector("div.sqr3").setAttribute("class", "sqr3bl");
});

document.getElementById("temaAzul").addEventListener("click", function () {
  document.querySelector("div.sqr4").setAttribute("class", "sqr4bl");
});

document.getElementById("temaAzul").addEventListener("click", function () {
  document.querySelector("div.sqr5").setAttribute("class", "sqr5bl");
});

document.getElementById("temaVerde").addEventListener("click", function () {
  document.querySelector("div.sqr1bl").setAttribute("class", "sqr1");
});

document.getElementById("temaVerde").addEventListener("click", function () {
  document.querySelector("div.sqr2bl").setAttribute("class", "sqr2");
});

document.getElementById("temaVerde").addEventListener("click", function () {
  document.querySelector("div.sqr3bl").setAttribute("class", "sqr3");
});

document.getElementById("temaVerde").addEventListener("click", function () {
  document.querySelector("div.sqr4bl").setAttribute("class", "sqr4");
});

document.getElementById("temaVerde").addEventListener("click", function () {
  document.querySelector("div.sqr5bl").setAttribute("class", "sqr5");
});
 */
