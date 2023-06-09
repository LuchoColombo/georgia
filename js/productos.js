const productoTipo = (tipo, data, elementoProd) => {
  const productosFilterByType = data.filter((data) => data.categoria === tipo);
  productosFilterByType.forEach((producto) => {
    let content = document.createElement("article");
    content.className = "flex-item";
    content.innerHTML = `
    <img src="${producto.img}" alt="Producto" class="imagen" />
            <div>
              <h2>${producto.nombre}</h2>
              <h4>${producto.descripcion}</h4>
              <h5><del>$ ${producto.precio}</del></h5>
              <h6>$ ${producto.precio * 0.85}</h6>
            </div>
    `;

    elementoProd.append(content);

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
            Toastify({
              text: "Producto ya agregado a la lista",
              className: "warning",
              gravity: "bottom",
              duration: 2000,
              onClick: function () {
                pintarCarrito();
              },
            }).showToast();
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          img: producto.img,
          nombre: producto.nombre,
          precio: producto.precioOfer,
        });
        Toastify({
          text: "Producto agregado con exito",
          className: "info",
          gravity: "bottom",
          duration: 2000,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {
            pintarCarrito();
          },
        }).showToast();
      }
      carritoCounter();
      saveLocal();
    });
  });
};

