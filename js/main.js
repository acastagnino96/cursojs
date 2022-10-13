const cards = document.getElementById("cards");

let productos = []
let carrito = []

function mostrarProductos(prd) {
    cards.innerHTML= ""
    prd.forEach(prod => {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3 ";
        column.id = `columna-${prod.id}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img class="w-50" src= "${prod.img}" alt="producto">
                    <p class="card-text"><b>${prod.nombre}</b></p>
                    <p class="card-text">Tipo: <b>${prod.tipo}</b></p>
                    <p class="card-text">Precio: <b>${prod.precio}</b></p>
                </div>
            </div>`;
    
        cards.append(column);

        let btnComprar = document.createElement('button');
        btnComprar.className = "btn btn-primary";
        btnComprar.textContent = ('Agregar');
        btnComprar.setAttribute('prodID', prod.id);
        cards.append(btnComprar)
        btnComprar.onclick = guardarEnCarrito;
    });
}

//// Carrito de compras ////

async function guardarEnCarrito(comidaId){
    let productos = await traerProductos();
    let item = productos.filter(prd => prd.id == comidaId.target.getAttribute('prodID'));
    mostrarToast(item);
    carrito.push(comidaId.target.getAttribute('prodID'))
    renderCarrito()
    guardarCarritoEnLocalStorage()
}

//// Mostrar Toast ////

function mostrarToast(miItem, toastAgregar) {
    Toastify({
        text: `PRODUCTO AGREGADO:
                ${miItem[0].nombre}`,
        duration: 2000,
        className: "toastAgregar",
        offset: {
            y: 80
        },
    }).showToast();
}

const contenedor = document.getElementById("carrito");

async function renderCarrito() {
    let productos = await traerProductos();
    contenedor.innerHTML = ""
    let carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = productos.filter((prod) => {
            return prod.id === parseInt(item);
        });
        const unidadesProd = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        let div = document.createElement("div")
        div.className = "col-md-4 mt-3 ";
        div.id = `columna-${miItem[0].id}`;
        div.innerHTML = `
        <div class="card">
            <div class="card-body">
            <img class="w-50" src= "${miItem[0].img}" alt="producto">
            <p class="card-text"><b>${miItem[0].nombre}</b></p>
            <p class="card-text">Tipo: <b>${miItem[0].tipo}</b></p>
            <p class="card-text">Cantidad: <b>${unidadesProd}</b></p>
            <p class="card-text">Precio: <b>${miItem[0].precio}</b></p>
        </div>
        <button onclick="eliminarItem(${miItem[0].id})" class="btn btn-primary">Eliminar</button>`;

        contenedor.append(div);
    })

    const divPrecio = document.getElementById("precioTotal");
    const Total =
        carrito.reduce((total, item) => {
            const miItem = productos.filter((items) => {
                return items.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0);

        divPrecio.innerHTML = Total
}

const eliminarItem = (id) => {
    let borrar = carrito.find((comida) => comida.id === id)
    let indice = carrito.indexOf(borrar)
    carrito.splice(indice, 1)
    renderCarrito()
    guardarCarritoEnLocalStorage()
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

function main(){
    traerYmostrarProductos()
    cargarCarritoDeLocalStorage()
}

main();