//Pide información del producto

class Item {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = Number(precio);
  }
  productoNombPrec() {
    console.log(this.id);
    console.log(this.nombre);
    console.log(this.precio);
  }
}

const productos = [];

let nombreDelProducto = [
  productos.push(
    new Item(
      1,
      prompt("Ingresa el plato principal"),
      Number(prompt("Ingresa su precio"))
    )
  ),
  productos.push(
    new Item(
      2,
      prompt("Ingresa la guarnición"),
      Number(prompt("Ingresa su precio"))
    )
  ),
];

for (const Item of productos) Item.productoNombPrec();

//Muestra los productos

console.log(productos);

let precioDelProducto = parseInt(prompt("Ingresa su precio total"));

//Lee el precio de los items

for (const Item of productos) {
  console.log(Item.precio);
}

//Ejecución

do {
  opcion = Number(
    prompt(
      "ingrese una opcion: \n\n 1- Tengo un cupon de descuento \n 2- No tengo cupon de descuento \n 3- Salir"
    )
  );

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

//Si tiene descuento

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
