//Pruebas

//Carrito hover
function toggleCart() {
  let y = document.querySelector(".shopping-cart");
  let mostrar = getComputedStyle(y).getPropertyValue("display");
  if (mostrar === "none") {
    y.style.display = "block";
    mostrar = "block";
  } else {
    y.style.display = "none";
  }
}

//Formulario
const boton = document.getElementById("btnPrincipal");

let nombre = "";
let direccion = "";
let email = "";
let usuario = "";
let pais = "";
let provincia = "";
let postalCode = "";

boton.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value;
  let usuario = document.getElementById("usuario").value;
  let pais = document.getElementById("pais").value;
  let provincia = document.getElementById("provincia").value;
  let postalCode = document.getElementById("postalCode").value;
  console.log(`Nombre: ${nombre}
    Direccion: ${direccion}
    Usuario: ${usuario}
    Email: ${email}
    Pais: ${pais}
    Provincia: ${provincia}
    Codigo Postal: ${postalCode}

    `);
});

//Lista de productos del carrito
const productos = [
  {
    nombre: "Pin de pollo",
    precio: 500,
    descripcion: "Pin de pollo con salsa barbacoa.",
    imagen: "./img/14.jpg",
    alt: "Pin de pollo",
  },
  {
    nombre: "Hamburguesa con papas fritas",
    precio: 1800,
    descripcion: "Hamburguesa con una porción de papas fritas.",
    imagen: "./img/12.jpg",
    alt: "Hamburguesa con papas fritas",
  },
  {
    nombre: "Hamburguesa",
    precio: 1200,
    descripcion: "Hamburguesa simple.",
    imagen: "./img/3.jpg",
    alt: "Hamburguesa simple",
  },
];

//Crear carrito
function productosTienda() {
  let tienda = document.getElementById("carritoJS");

  let divProduct = document.createElement("ul");

  divProduct.classList.add("list-group", "mb-3");

  productos.forEach((product) => {
    let productoHTML = `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <strong><h6 class="my-0">${product.nombre}</h6></strong>
                <small class="text-muted">${product.descripcion}</small>
                <button class="btn buttonDelete">Eliminar</button>
              </div>
              <span class="text-muted">$${product.precio}</span>
            </li>
`;
    tienda.innerHTML += productoHTML;
  });
}
productosTienda();

//Suma total del carrito
let sumar = 0;

function sumarCarrito() {
  productos.forEach((product) => {
    sumar += product.precio;
  });
}
sumarCarrito();

//Descuento carrito
//Cambiar el primer valor(10) para obtener el % de descuento

let descuento = (10 / 100) * sumar;

function descuentoCarrito() {
  productos.forEach(() => {
    totalConDescuento = sumar - descuento;
    precioTotal = sumar - totalConDescuento;
  });

  let tienda = document.getElementById("descuentoCarritoJS");

  let totalHTML = `
  <span class="text-success">-$${precioTotal}</span>
        `;
  tienda.innerHTML += totalHTML;
}
descuentoCarrito();

//Total con descuento
function totalCarrito() {
  let tienda = document.getElementById("sumaCarritoJS");
  let totalHTML = `
          <strong>$${totalConDescuento}</strong>
        `;
  tienda.innerHTML += totalHTML;
}
totalCarrito();

//Contar elementos del carrito

function contarCarrito() {
  let contar = productos.length;

  let tienda = document.getElementById("contarCarrito");
  let divProduct = document.createElement("h4");

  divProduct.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mb-3"
  );
  {
    let productoHTML = `
    <span class="badge badge-secondary badge-pill">${contar}</span>
`;
    tienda.innerHTML += productoHTML;
  }
}
contarCarrito();

//Contar compra formulario
function contarCarritoCompra() {
  let contar = productos.length;

  let tienda = document.getElementById("contarCarritoCompra");
  let divProduct = document.createElement("h4");

  divProduct.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mb-3"
  );
  {
    let productoHTML = `
    <span class="badge badge-secondary badge-pill">${contar}</span>
`;
    tienda.innerHTML += productoHTML;
  }
}
contarCarritoCompra();

//Carrito de NAVBAR
//Carrito productos (Copia de productos)
let producto = productos.slice();

function productosCarrito() {
  let tienda = document.getElementById("productosCarrito");

  let divProduct = document.createElement("ul");

  divProduct.classList.add("list-group", "mb-3");

  producto.forEach((product) => {
    let productoHTML = `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <strong><h6 class="my-0">${product.nombre}</h6></strong>
                <small class="text-muted">${product.descripcion}</small>
                <button id="buttonDelete" class="btn">Eliminar</button>
              </div>
              <span class="text-muted">$${product.precio}</span>
            </li>
`;
    tienda.innerHTML += productoHTML;
  });
}
productosCarrito();

//Suma total en el carrito
let precioTotal1 = 0;

function totalCarrito1() {
  producto.forEach((elemento) => {
    precioTotal1 += elemento["precio"];
  });

  let tienda = document.getElementById("totalCarrito");

  let totalHTML = `
  <span>${precioTotal1}</span>
        `;
  tienda.innerHTML += totalHTML;
}
totalCarrito1();

//Eliminar elemento del carrito
