class producto{
    constructor (id, nombre, tipo, precio, stock, img){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

const productos = [
    lemonPie = new producto(1, "Lemon Pie", "Tarteleta", 700, 10, "./images/lemonpie.jpg"),
    cremeBrulee = new producto(2, "Creme Brulee", "Tarteleta", 700, 10, "./images/cremebrulee.jpg"),
    cremeDeCoco = new producto(3, "Creme de Coco", "Tarteleta", 700, 10, "./images/cremedecoco.jpg"),
    crumbleManzana = new producto(4, "Crumble de Manzana", "Tarteleta", 700, 10, "./images/crumblemanzana.jpg"),
    perasYChocolate = new producto(5, "Peras y Chocolate", "Tarteleta", 700, 10, "./images/peras.jpg"),
    frutosRojos = new producto(6, "Frutos Rojos", "Tarteleta", 700, 10, "./images/frutosrojos.jpg"),
    nuecesYDDL = new producto(7, "Nueces y Dulce de Leche", "Tarteleta", 700, 10, "./images/nuecesddl.jpg"),
    chocolatePasion = new producto(8, "Chocolate Pasión", "Tarteleta", 700, 10, "./images/chocolate.jpg"),
    bombonesDDL = new producto(11, "Bombones de Dulce de Leche", "Bombones", 600, 10, "./images/bombones.jpg"),
    mentitas = new producto(12, "Mentitas", "Bombones", 600, 10, "./images/mentitas.jpg"),
]

const cards = document.getElementById("cards");

const carrito = []

for (const producto of productos) {
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

    // let botonAgregar = document.getElementById(`agregar-${producto.id}`);
    // botonAgregar.onclick = () => guardarEnCarrito(producto.Id);
  }

  function guardarEnCarrito(comidaId){
    let item = productos.find((comida) => comida.id === comidaId)
    carrito.push(item)
    console.log (carrito)
    renderCarrito()
    calcularTotal()
}

const contenedor = document.getElementById("carrito");

const renderCarrito = () => {
    contenedor.innerHTML = ""
    carrito.forEach((item) => {
        let div = document.createElement("div")
        div.className = "col-md-4 mt-3 ";
        div.id = `columna-${item.id}`;
        div.innerHTML = `
        <div class="card">
            <div class="card-body">
            <img class="w-50" src= "${item.img}" alt="producto">
            <p class="card-text"><b>${item.nombre}</b></p>
            <p class="card-text">Tipo: <b>${item.tipo}</b></p>
            <p class="card-text">Precio: <b>${item.precio}</b></p>
        </div>`;

        contenedor.append(div);
    })
}

const divPrecio = document.getElementById("precioTotal"); 

calcularTotal = () => {
    let cont = 0
    carrito.forEach((pre) => {
        cont += pre.precio
    })

    divPrecio.innerHTML = cont
}