//Productos
const productos = {
  producto1: {
    nombre: "Hamburguesa",
    precio: "1200",
    descripcion: "Hamburguesa simple.",
    imagen: "./img/3.jpg",
    alt: "Hamburguesa simple",
  },
  producto2: {
    nombre: "Hamburguesa con papas fritas",
    precio: "1800",
    descripcion: "Hamburguesa con una porción de papas fritas.",
    imagen: "./img/12.jpg",
    alt: "Hamburguesa con papas fritas",
  },
  producto3: {
    nombre: "Pin de pollo",
    precio: "500",
    descripcion: "Pin de pollo con salsa barbacoa.",
    imagen: "./img/14.jpg",
    alt: "Pin de pollo",
  },
  producto4: {
    nombre: "Canape clasico",
    precio: "500",
    descripcion: "Canape clasico de pollo, tomate, lechuga.",
    imagen: "./img/15.jpeg",
    alt: "Canape clasico",
  },
  producto5: {
    nombre: "Carne al asador",
    precio: "800",
    descripcion: "Carne al asador",
    imagen: "./img/16.jpeg",
    alt: "Carne al asador",
  },
  producto6: {
    nombre: "Ensalada de lechuga y tomate",
    precio: "500",
    descripcion: "Ensalada de lechuga y tomate.",
    imagen: "./img/17.jpg",
    alt: "Ensalada de lechuga y tomate",
  },
};

const plantillaProd = document.getElementById("template-prod").content;
const contenedorProd = document.querySelector(".contenedor-productos");
const fragment = document.createDocumentFragment();

//Agregar productos al HTML
Object.values(productos).forEach((producto) => {
  plantillaProd.querySelector(".div-info .nombre-prod").textContent =
    producto.nombre;
  plantillaProd.querySelector(".div-precio-boton .precio").textContent =
    producto.precio;
  plantillaProd.querySelector(".div-info .descripcion-prod").textContent =
    producto.descripcion;
  plantillaProd
    .querySelector(".contenedor-img img")
    .setAttribute("alt", producto.alt);
  plantillaProd
    .querySelector(".contenedor-img img")
    .setAttribute("src", producto.imagen);
  const clonar = plantillaProd.cloneNode(true);
  fragment.appendChild(clonar);
});
contenedorProd.appendChild(fragment);

//Compra carrito
const templateTabla = document.getElementById(
  "agregar-producto-al-carro"
).content;
const tbodyCarrito = document.getElementById("carrito-body");
const fragmentTabla = document.createDocumentFragment();
const plantillaFooter = document.getElementById("tfooter").content;
const tfootCarrito = document.getElementById("footer");

contenedorProd.addEventListener("click", (e) => {
  if (e.target.textContent === "Agregar al carrito") {
    setCarrito(e.target.parentElement.parentElement);
  }
  e.stopPropagation();
});
const setCarrito = (e) => {
  const precCantProdCarrito = {
    nombre: e.querySelector(".div-info .nombre-prod").textContent,
    precio: e.querySelector(".div-precio-boton .precio").textContent,
    cantidad: 1,
  };
  if (carrito.hasOwnProperty(precCantProdCarrito.nombre)) {
    carrito[precCantProdCarrito.nombre].cantidad += 1;
  } else {
    carrito[precCantProdCarrito.nombre] = { ...precCantProdCarrito };
  }
  crearTabla(carrito);
};

const crearTabla = (objetoCarrito) => {
  Object.values(objetoCarrito).forEach((objeto) => {
    const clonarTabla = templateTabla.cloneNode(true);
    clonarTabla.getElementById("producto").textContent = objeto.nombre;
    clonarTabla.getElementById("cant").textContent = objeto.cantidad;
    clonarTabla.getElementById("precio-uni").textContent = "$" + objeto.precio;
    let precioTotal = parseFloat(objeto.precio) * objeto.cantidad;
    clonarTabla.getElementById("precio-total-prod").textContent =
      "$" + precioTotal.toFixed(2);
    fragmentTabla.appendChild(clonarTabla);
  });
  tbodyCarrito.innerHTML = "";
  tbodyCarrito.appendChild(fragmentTabla);
  footerCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
const footerCarrito = () => {
  tfootCarrito.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    tfootCarrito.innerHTML =
      "<tr><td colspan = 4>¡No hay ningun producto en el carrito!</td></tr>";
  } else {
    const total = Object.values(carrito).reduce(
      (acc, { cantidad, precio }) => acc + cantidad * precio,
      0
    );
    plantillaFooter.getElementById("total-a-pagar").textContent =
      "$" + total.toFixed(2);
    const clonarFooterCarrito = plantillaFooter.cloneNode(true);
    fragment.appendChild(clonarFooterCarrito);
    tfootCarrito.appendChild(fragment);
    //Vaciar carrito boton
    const botonVaciar = document.getElementById("vaciar-tabla");
    botonVaciar.addEventListener("click", () => {
      carrito = {};
      crearTabla(carrito);
      footerCarrito();
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  }
};

//Botones de cantidad (Aumentar y disminuir)
tbodyCarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    aumentarDisminuir(e.target);
  }
});
const aumentarDisminuir = (boton) => {
  if (boton.textContent === "+") {
    const btnAumDism =
      boton.parentElement.parentElement.firstElementChild.textContent;
    Object.values(carrito).forEach((e) => {
      if (e.nombre === btnAumDism) {
        carrito[e.nombre].cantidad++;
      }
    });
  }
  if (boton.textContent === "-") {
    const btnAumDism =
      boton.parentElement.parentElement.firstElementChild.textContent;
    Object.values(carrito).forEach((e) => {
      if (e.nombre === btnAumDism) {
        carrito[e.nombre].cantidad--;
        if (carrito[e.nombre].cantidad === 0) {
          delete carrito[e.nombre];
        }
      }
    });
  }
  crearTabla(carrito);
  footerCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

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

//LocalStorage

let aux = localStorage.getItem("carrito");

// if (!aux) {
//   carrito = {};
// } else {
//   carrito = JSON.parse(aux);
// }

let carrito = JSON.parse(aux) || {};

crearTabla(carrito);

//!aux ? (carrito = {}) : (carrito = JSON.parse(aux));

//localStorage.setItem("carrito", JSON.stringify(carrito));

////////////////////////////////////////////////////////////////////////////////

//Toastify Agregar al Carrito

function successBtn() {
  Toastify({
    text: "¡Se agregó al carrito!",
    duration: 1500,
  }).showToast();
}

//Sweet Alert Vaciar Carrito

function vaciarBtn() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Estas seguro de vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, vaciar.",
      cancelButtonText: "¡No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "El carrito se vació.",
          "Tu carrito ha sido vaciado",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Tu carrito esta seguro :)",
          "error"
        );
      }
    });
}
