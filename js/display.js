const ingreso = document.getElementById("button_ingreso");
const horario = document.getElementById("button_horario");

ingreso.addEventListener("click", () => {
	document.getElementById("display-ingreso").style.display = "flex";
});

horario.addEventListener("click", () => {
	document.getElementById("display-horario").style.display = "flex";
});