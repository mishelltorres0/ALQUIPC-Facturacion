function calcular(){
    let nombre = document.getElementById("nombre").value.trim();
    let telefono = parseInt(document.getElementById("telefono").value);
    let equipos = parseInt(document.getElementById("equipos").value);
    let dias = parseInt(document.getElementById("dias").value);
    let extra = parseInt(document.getElementById("extra").value);
    let tipo = document.getElementById("tipo").value;

if(nombre === ""){
    alert("Ingrese el nombre del cliente");
    return;
}

if(isNaN(equipos) || equipos < 2){
    alert("Debe ingresar mínimo 2 equipos");
    return;
}

if(isNaN(dias) || dias <= 0){
    alert("Ingrese días válidos");
    return;
}

if(isNaN(extra) || extra < 0){
    extra = 0;
}

let precio = 35000;

let subtotal = equipos * dias * precio;
let valorExtra = equipos * extra * precio;

let descuentoExtra = valorExtra * (0.02 * extra);

if(descuentoExtra > valorExtra * 0.10){
    descuentoExtra = valorExtra * 0.10;
}

let total = subtotal + valorExtra - descuentoExtra;

if(tipo === "fuera"){
    total = total * 1.05;
}

if(tipo === "local"){
    total = total * 0.95;
}

let id = Math.floor(Math.random() * 10000);

document.getElementById("resultado").innerHTML =
"Nombre Cliente: " + nombre + "<br>" +
"Telefono: " + telefono + "<br>" +
"ID Cliente: " + id + "<br>" +
"Equipos: " + equipos + "<br>" +
"Días iniciales: " + dias + "<br>" +
"Días adicionales: " + extra + "<br>" +
"Total a pagar: $" + total.toFixed(0);

}