const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito.</h1>  
    `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <img src="${producto.img}" alt="Anillo" class="imagen" />
              <h2>${producto.nombre}</h2>
              <h5>$ ${producto.precio}</h5>
      `;

    modalContainer.append(carritoContent);

    let eliminar = document.createElement("button");

    eliminar.innerText = "Eliminar";
    eliminar.className = "comprar-borrar";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalComprado = document.createElement("div");
  totalComprado.className = "total-content";
  totalComprado.innerHTML = `Total a pagar $ ${total}`;
  modalContainer.append(totalComprado);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const founId = carrito.find((el) => el.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId;
  });
  Toastify({
    text: "Producto eliminado",
    className: "warning",
    gravity: "bottom",
    duration: 2000,
    style: {
      background: "linear-gradient(to right, #ff5f6d, #ffc371)",
    },
  }).showToast();
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
