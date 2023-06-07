const anillosProd = document.getElementById("anillosProd");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
  {
    id: 1,
    nombre: "Anillo Minsk Silver",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 9000,
    precioOfer: 9000 * 0.85,
    img: "../img/anillo1.jpg",
  },
  {
    id: 2,
    nombre: "Anillo Berna Silver",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 9000,
    precioOfer: 9000 * 0.85,
    img: "../img/anillo2.jpg",
  },
  {
    id: 3,
    nombre: "Anillo Dublín Silver",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 9000,
    precioOfer: 9000 * 0.85,
    img: "../img/anillo3.jpg",
  },
  {
    id: 4,
    nombre: "Anillo Riga",
    categoria: "anillo",
    descripcion:
      "Anillo doble de Plata 925 Italiana con detalles en baño de oro 18k",
    precio: 11000,
    precioOfer: 11000 * 0.85,
    img: "../img/anillo4.jpg",
  },
  {
    id: 5,
    nombre: "Anillo Suecia Silver",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 9000,
    precioOfer: 9000 * 0.85,
    img: "../img/anillo5.jpg",
  },
  {
    id: 6,
    nombre: "Anillo Suiza Silver",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 9000,
    precioOfer: 9000 * 0.85,
    img: "../img/anillo6.jpg",
  },
  {
    id: 7,
    nombre: "Anillo Euro",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana",
    precio: 11000,
    precioOfer: 11000 * 0.85,
    img: "../img/anillo7.jpg",
  },
  {
    id: 8,
    nombre: "Anillo Hungría",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana con detalles en baño de oro 18k",
    precio: 11000,
    precioOfer: 11000 * 0.85,
    img: "../img/anillo8.jpg",
  },
  {
    id: 9,
    nombre: "Anillo Rumania",
    categoria: "anillo",
    descripcion: "Anillo de Plata 925 Italiana con detalles en baño de oro 18k",
    precio: 11000,
    precioOfer: 11000 * 0.85,
    img: "../img/anillo9.jpg",
  },
];

let carrito = [];

productos.forEach((producto) => {
  let content = document.createElement("article");
  content.className = "flex-item";
  content.innerHTML = `
  <img src="${producto.img}" alt="Anillo" class="imagen" />
          <div>
            <h2>${producto.nombre}</h2>
            <h4>${producto.descripcion}</h4>
            <h5><del>$ ${producto.precio}</del></h5>
            <h6>$ ${producto.precioOfer}</h6>
          </div>
  `;

  anillosProd.append(content);

  let comprar = document.createElement("button");
  comprar.className = "comprar-borrar";
  comprar.innerText = "Comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProducto) => repeatProducto.id === producto.id
    );

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === prod.id) {
          alert("Ya agregaste este producto a las lista");
        }
      });
    } else {
      carrito.push({
        id: producto.id,
        img: producto.img,
        nombre: producto.nombre,
        precio: producto.precioOfer,
      });
      alert("Producto agregado con exito");
    }
    carritoCounter();
  });
});
