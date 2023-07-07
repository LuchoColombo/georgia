const arosProd = document.getElementById("arosProd");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
  const resp = await fetch("../data.json");
  const data = await resp.json();

  productoTipo("aro", data, arosProd);
};

getProductos();

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
