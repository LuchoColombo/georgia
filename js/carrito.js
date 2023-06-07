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
  totalComprado.innerHTML = `total a pagar $ ${total}`;
  modalContainer.append(totalComprado);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const founId = carrito.find((el) => el.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== founId;
  });

  carritoCounter();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
};
