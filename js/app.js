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

//ProductosJs

const productos = [
  {
    id: 1,
    imagen: "./img/3.jpg",
    nombre: "Hamburguesa",
    categoria: "Plato principal",
    precio: 1200,
  },
  {
    id: 2,
    imagen: "./img/12.jpg",
    nombre: "Hamburguesa con papas fritas",
    categoria: "Plato principal",
    precio: 1800,
  },
  {
    id: 3,
    imagen: "./img/13.jpg",
    nombre: "Hamburguesa con huevo",
    categoria: "Plato principal",
    precio: 1350,
  },
  {
    id: 4,
    imagen: "./img/14.jpg",
    nombre: "Pin de pollo",
    categoria: "Entrada",
    precio: 500,
  },
  {
    id: 5,
    imagen: "./img/15.jpeg",
    nombre: "Canape clasico",
    categoria: "Entrada",
    precio: 500,
  },
  {
    id: 6,
    imagen: "./img/16.jpeg",
    nombre: "Carne al asador",
    categoria: "Entrada",
    precio: 800,
  },
  {
    id: 7,
    imagen: "./img/17.jpg",
    nombre: "Ensalada de lechuga y tomate",
    categoria: "Acompañamiento",
    precio: 300,
  },
];

const carrito = [];

function productosTienda() {
  let tienda = document.getElementById("productosJS");

  let divProduct = document.createElement("div");

  divProduct.classList.add("single-product");

  productos.forEach((product) => {
    let productoHTML = `
    <div class="card card-mod" style="width: 18rem;">
    <div class="single-product">
      <img class="card-img-top card-img-top-mod" src="${product.imagen}" alt="Card image cap" style="width: 262px; height: 262px">
      <div class="card-body part-2">
        <h3 class="card-title product-title">${product.nombre}</h3>
        <h4 class="card-text">$${product.precio}</h4>
        <br>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  </div>
`;
    tienda.innerHTML += productoHTML;
  });
}
productosTienda();
