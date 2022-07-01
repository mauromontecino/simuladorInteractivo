//Pide información del producto

let nombreDelProducto = prompt("Ingresar el producto");
let precioDelProducto = parseInt(prompt("Ingresa su precio"));

do {
  opcion = Number(
    prompt(
      "ingrese una opcion: \n\n 1- Tengo un cupon de descuento \n 2- No tengo cupon de descuento \n 3- Salir"
    )
  );
  let cant;

  switch (opcion) {
    case 1:
      tieneDescuento();
      break;
    case 2:
      console.log("Este es el precio sin descuento $" + precioDelProducto);
      break;
    case 3:
      alert("Hasta luego");
      break;
    default:
      alert("Opcion incorrecta");
      break;
  }
} while (opcion !== 3);

function tieneDescuento() {
  let porcentajeDeDescuento = parseInt(prompt("¿Cual es el % del descuento?"));
  let porcentajeDeDescuento2 =
    (porcentajeDeDescuento / 100) * precioDelProducto;
  let precioFinal = precioDelProducto - porcentajeDeDescuento2;
  {
    if (precioFinal > 0) {
      console.log("Este es el precio con descuento $" + precioFinal);
    } else if (precioFinal <= 0) {
      console.log("Error");
    }
  }
}
