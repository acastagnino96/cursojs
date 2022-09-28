class producto{
    constructor (id, nombre, tipo, precio, stock, img){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.img = img;
    }
}

const lemonPie = new producto(1, "Lemon Pie", "Tarteleta", 700, 10, "./images/lemonpie.jpg")
const cremeBrulee = new producto(2, "Creme Brulee", "Tarteleta", 700, 10, "./images/cremebrulee.jpg")
const cremeDeCoco = new producto(3, "Creme de Coco", "Tarteleta", 700, 10, "./images/cremedecoco.jpg")
const crumbleManzana = new producto(4, "Crumble de Manzana", "Tarteleta", 700, 10, "./images/crumblemanzana.jpg")
const perasYChocolate = new producto(5, "Peras y Chocolate", "Tarteleta", 700, 10, "./images/peras.jpg")
const frutosRojos = new producto(6, "Frutos Rojos", "Tarteleta", 700, 10, "./images/frutosrojos.jpg")
const nuecesYDDL = new producto(7, "Nueces y Dulce de Leche", "Tarteleta", 700, 10, "./images/nuecesddl.jpg")
const chocolatePasion = new producto(8, "Chocolate Pasión", "Tarteleta", 700, 10, "./images/chocolate.jpg")
const bombonesDDL = new producto(11, "Bombones de Dulce de Leche", "Bombones", 600, 10, "./images/bombones.jpg")
const mentitas = new producto(12, "Mentitas", "Bombones", 600, 10, "./images/mentitas.jpg")

const productos = []

productos.push(lemonPie, cremeBrulee, cremeDeCoco, crumbleManzana, perasYChocolate, frutosRojos, nuecesYDDL, chocolatePasion, bombonesDDL, mentitas)

const cards = document.getElementById("cards");

let carrito = []

function mostrarProductos(productos) {
    cards.innerHTML= ""
    productos.forEach(producto => {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3 ";
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <img class="w-50" src= "${producto.img}" alt="producto">
                <p class="card-text"><b>${producto.nombre}</b></p>
                <p class="card-text">Tipo: <b>${producto.tipo}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <div class="card-footer">
                        <button onclick="guardarEnCarrito(${producto.id})" class="btn btn-primary" id="agregar-${producto.id}" >Agregar al carrito</button>
                    </div>
                </div>
            </div>`;
    
        cards.append(column);
    });
}

//// Carrito de compras ////

function guardarEnCarrito(comidaId){
    let item = productos.find((comida) => comida.id === comidaId)
    carrito.push(item)
    console.log (carrito)
    guardarCarritoEnLocalStorage()
    renderCarrito()
    calcularTotal()
}

const contenedor = document.getElementById("carrito");

function renderCarrito() {
    contenedor.innerHTML = ""
    let carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = productos.filter((prod) => {
            return prod.idprod === parseInt(item);
        });
        const unidadesProd = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        let div = document.createElement("div")
        div.className = "col-md-4 mt-3 ";
        div.id = `columna-${item.id}`;
        div.innerHTML = `
        <div class="card">
            <div class="card-body">
            <img class="w-50" src= "${item.img}" alt="producto">
            <p class="card-text"><b>${item.nombre}</b></p>
            <p class="card-text">Tipo: <b>${item.tipo}</b></p>
            <p class="card-text">Cantidad: <b>${unidadesProd}</b></p>
            <p class="card-text">Precio: <b>${item.precio}</b></p>
        </div>
        <button onclick="eliminarItem(${item.id})" class="btn btn-primary">Eliminar</button>`;

        contenedor.append(div);
    })
}

const eliminarItem = (id) => {
    let borrar = carrito.find((comida) => comida.id === id)
    let indice = carrito.indexOf(borrar)
    carrito.splice(indice, 1)
    guardarCarritoEnLocalStorage()
    renderCarrito()
    calcularTotal()
}

//// Local Storage ////

function guardarCarritoEnLocalStorage() {
    let miLocalStorage = JSON.stringify(carrito);
    localStorage.setItem("carrito", miLocalStorage);
}

function cargarCarritoDeLocalStorage() {
    let miLocalStorage = localStorage.getItem("carrito");
    if (miLocalStorage) {
        carrito = JSON.parse(miLocalStorage);
        renderCarrito();
    }
}

//// Calculo del total ////

const divPrecio = document.getElementById("precioTotal"); 

function calcularTotal () {
    let cont = 0
    carrito.forEach((pre) => {
        cont += pre.precio
    })

    divPrecio.innerHTML = cont
}

function main(){
    mostrarProductos(productos)
    cargarCarritoDeLocalStorage()
    calcularTotal ()
}

main();