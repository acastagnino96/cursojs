class Producto{
    constructor (id, nombre, tipo, precio, stock, img){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.img = img;
    }
}

// Traer los objetos desde productos.json

async function obtenerDatos(url) {
    try{
        return fetch(url).then(response => response.json());
    }catch (error){
        console.log(error)
    }
}

async function traerProductos() {
    const Lista = await obtenerDatos('./js/productos.json');
    let productos = []
    Lista.forEach(prod => {
        productos.push(new Producto(prod.id, prod.nombre, prod.tipo, prod.precio, prod.stock, prod.img))
    });
    return productos;
}

async function traerYmostrarProductos() {
    let productos = await traerProductos()
    mostrarProductos(productos)
}