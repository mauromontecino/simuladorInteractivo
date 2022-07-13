//Pide el nombre
nombre = prompt("Ingresa tu nombre:");

//Cambia el encavezado
document.getElementById(
  "div-1"
).innerHTML = `¡Hola! ${nombre}. Mirá nuestro Menú aqui abajo`;

//Modifica texto de menu
document.getElementById(
  "menuPrincipal"
).innerHTML = `${nombre} . Esto es lo que te recomendamos`;

//awdqwd

const productos = [
  { nombre: "Hamburgueza", precio: 1100 },
  { nombre: "Pizza", precio: 1300 },
  { nombre: "Hamburgueza Completa", precio: 1800 },
  { nombre: "Pizza Completa", precio: 2000 },
];
for (const producto of productos) {
  let contenedor = document.createElement(`div`);
  contenedor.className = "col-md-6 col-lg-4 col-xl-3";
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<div id="product-2" class="single-product">
  <div class="part-1">
  <img src="img/1.jpg" alt="">
    <span class="discount">15% descuento</span>
    <ul>
      <li>
        <a href="#"><i class="fa-solid fa-cart-plus"></i></a>
      </li>
      <li>
        <a href="#"><i class="fas fa-heart"></i></a>
      </li>
    </ul>
  </div>
  <div class="part-2">
    <h3 class="product-title">${producto.nombre}</h3>
    <h4 class="product-old-price">$79.99</h4>
    <h4 class="product-price">$${producto.precio}</h4>
  </div>
</div>`;
  document.getElementById("productosJS").appendChild(contenedor);
}
