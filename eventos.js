// Tengo dos botones para restablecer y cambiar el fondo

document.getElementById("boton").addEventListener(`click`, function () {
    document.getElementById("demo").innerHTML = "Evento 1 Probado";
    
});

document.getElementById("boton-color").addEventListener("click", function () {
    document.body.style.backgroundColor= "red";

});

document.getElementById("boton-restb").addEventListener("click", function () {
    document.body.style.backgroundColor= "aqua";

});

document.getElementById("boton-ocultar").addEventListener("click", function () {
    document.getElementById("demo").style.display= "none";
    console.log ("Hallou 'Moundou'")
});
document.getElementById("boton-aparecer").addEventListener("click", function () {
    document.getElementById("demo").style.display= "block";
    console.log ("apareció")
});