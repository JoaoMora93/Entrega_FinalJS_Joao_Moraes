const mostrarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText ="x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let contenidoDelCarrito = document.createElement("div")
    contenidoDelCarrito.className = "modal-content"
    contenidoDelCarrito.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Subtotal: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(contenidoDelCarrito)

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-producto";
        contenidoDelCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "contenido-total"
    totalComprado.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalComprado);
};

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    contadorCarrito();
    mostrarCarrito();
};

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}