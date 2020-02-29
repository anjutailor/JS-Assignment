document.getElementById("growBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "250px";
});

document.getElementById("blueBtn").addEventListener("click", function() {
  document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("fadeBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "100px";
});

document.getElementById("shrinkBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "25px";
});

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "200px";
});
