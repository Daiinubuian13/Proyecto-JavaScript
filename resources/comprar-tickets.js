const TICKET = 200;
const ESTUDIANTE = 0.8;
const TRAINEE = 0.5;
const JUNIOR = 0.15;

const nombre = document.querySelector("#nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#email");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar");
let totalPago = document.querySelector("#totalPago");

/*btnClear.addEventListener("click", limpiarRegistros); - se comenta porque se hace en html*/
btnResumen.addEventListener("click", calcularMonto);

function limpiarRegistros() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = "";
  totalPago.textContent = "";
}
/*
let option = "esta seguro de borrar los campos";
let mensaje = "";
les bCantidad = parseInt(document.getElementlyId("cantidadTickets").value);
les bCategoria = parseInt(document.getElementlyId("categoriaSelect").value);
if (option === true) {
  mensaje = "borrado";
  window.location.reload{};
} else{
  mensaje = "se arrepintió";
  $("#cantidadTickets").val(bCantidad);
  $("#categoriaSelect").val(bCategoria);
}
alert (mensaje);
*/

function calcularMonto() {
  totalPago.textContent = TICKET - (TICKET * calcularDescuento()) * cantidad.value;
    
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 0;
    case "1":
      return ESTUDIANTE;
    case "2":
      return TRAINEE;
    case "3":
      return JUNIOR;
    default:
      break;
  }
}

