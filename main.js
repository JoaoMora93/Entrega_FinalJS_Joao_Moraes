const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("ver-carrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "carta";
    content.innerHTML = `
                <img class="img-borde" src="${product.img}">
                <h3>${product.nombre}</h3>
                <p class="precio">${product.precio} $</p>
        
    `;

    contenidoTienda.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre: product.nombre,
            precio : product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText ="x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((producto) =>{
        contenidoDelCarrito = document.createElement("div")
    carrito.className = "modal-content"
    carrito.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio} $</p>
        `;

        modalContainer.append(contenidoDelCarrito)
    });
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "contenido-total"
    totalComprado.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalComprado);
});