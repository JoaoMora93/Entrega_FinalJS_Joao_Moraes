const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("ver-carrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("producto")) || [];

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
        
        const repetido = carrito.some((repetidoProduct) => repetidoProduct.id === product.id);
                    
        if (repetido){
            carrito.map((prod) => {
                if(prod.id === product.id) {
                    prod.cantidad++;
                }
            })
        } else {
            carrito.push({
                id : product.id,
                img : product.img,
                nombre: product.nombre,
                precio : product.precio,
                cantidad: product.cantidad
            });
        }
        console.log(carrito);
        contadorCarrito();
        guardarLocal();
    });
});

// set
const guardarLocal = () => {
    localStorage.setItem("producto", JSON.stringify(carrito));
};

//get

// JSON.parse(localStorage.getItem(producto));