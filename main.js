const contenidoTienda = document.getElementById("contenidoTienda");

const productos = [
    {id: 1, nombre: "Sahumador 1", precio: 240, img: "../recursos/images/Sahumaerios.jpeg"},
    {id: 2, nombre: "Sahumador 2", precio: 250, img: "../recursos/images/saumador-con-cuenco.jpeg"},
    {id: 3, nombre: "Sahumador 3", precio: 265, img: "../recursos/images/varios-productos-2.jpeg"},
    {id: 4, nombre: "Mix 1", precio: 140, img: "../recursos/images/mix-con-adorno-hilos-con-alma.jpeg"},
    {id: 5, nombre: "Mix 2", precio: 150, img: "../recursos/images/mix-con-carbón-horizontal.jpeg"},
    {id: 6, nombre: "Mix 3", precio: 180, img: "../recursos/images/mix-de-hierbas.jpeg"},
    {id: 7, nombre: "Combo 1", precio: 500, img: "../recursos/images/caja-presentación.jpeg"},
    {id: 8, nombre: "Combo 2", precio: 450, img: "../recursos/images/producto-1.jpeg"},
    {id: 9, nombre: "Combo 3", precio: 550, img: "../recursos/images/producto-2.jpeg"},
];

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.innerHTML = `
            <div class="col-lg-4 col-md-6 col-sm-12">
                <img class="rounded img-borde" src="${product.img}">
                <h3>${product.nombre}</h3>
                <p>${product.precio} $</p>
            </div>
        
    `;

    contenidoTienda.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";

    content.append(comprar);
});

