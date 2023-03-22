const step = document.querySelectorAll(".step");
const end = document.getElementById("end_move");
const start = document.getElementById("start_move");
const reset = document.getElementById("btn");

for (let i = 0; i < step.length; i++) {
  step[i].addEventListener("mouseover", () => {
    zacni.textContent = "Prohráváš, jdi znovu na start";
    zacni.style.color = "red";
  });
}

start.addEventListener("mouseover", () => {
  zacni.textContent = "Začni hru";
  zacni.style.color = " rgb(46, 114, 162)";
});

end.addEventListener("mouseover", () => {
  zacni.textContent = "Jsi vítěz";
});

reset.addEventListener("click", () => {
  zacni.textContent = "";
});
