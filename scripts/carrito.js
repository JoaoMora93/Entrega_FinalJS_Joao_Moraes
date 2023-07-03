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
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Subtotal: ${product.cantidad * product.precio}</p>
        <span class="borrar-producto">❌</span>
        `;

        modalContainer.append(contenidoDelCarrito);

// restar y sumar cantidades en el carrito

        let restar = contenidoDelCarrito.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
                product.cantidad--;
            }
            guardarLocal();
            mostrarCarrito();
        });

        let sumar = contenidoDelCarrito.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            guardarLocal();
            mostrarCarrito();
        });

// Fin restar y sumar

// Eliminar producto del carrito

        let eliminar = contenidoDelCarrito.querySelector(".borrar-producto");

        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });

        // let eliminar = document.createElement("span");
        // eliminar.innerText = "❌";
        // eliminar.className = "borrar-producto";
        // contenidoDelCarrito.append(eliminar);

        // eliminar.addEventListener("click", eliminarProducto);
    });

// Fin eliminar producto del carrito

// Total y sub total a pagar en el carrito

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "contenido-total"
    totalComprado.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalComprado);
};

// Fin total subtotal

verCarrito.addEventListener("click", mostrarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    contadorCarrito();
    guardarLocal();
    mostrarCarrito();
};

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};