class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getCantidad(){
        return this.cantidad;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    setCantidad(cantidad){
        this.cantidad = cantidad;
    }
    calcularSubtotal(){
        alert("Se agregaron " + this.cantidad + " sesiones de " + this.nombre + " al carrito");
        return this.precio * this.cantidad;
    }
}

const productos = [
    new Producto("Axilas", 500),
    new Producto("Espalda", 1500),
    new Producto("Piernas completas", 2500),
    new Producto("Media pierna", 1700),
    new Producto("Abdomen", 1000),
    new Producto("Rostro completo", 1500),
]

function mensajeInicial (){
    let mensaje = "Hola! De qué zona te gustaría comprar sesiones de depilación?";

    for(let i=1; i<=productos.length; i++){
        mensaje += `\n${i}- ${productos[i-1].nombre} - $ ${productos[i-1].precio}`
    }

    mensaje += `\n${productos.length+1}- Salir`
    return mensaje
}

function pedirUnidades (producto){
    return prompt(`¿Cuántas sesiones de ${producto.nombre} desea comprar?`)
}

function subtotal (unidades, producto){
    alert(`Se agregaron a tu carrito ${unidades} sesiones de ${producto.nombre} por $ ${unidades * producto.precio}`)
    return unidades * producto.precio
}

function calcularTotal (arr){
    return arr.reduce((acc, el) => acc + el, 0)
}

let total = []
let carrito = []

let opcion = parseInt(prompt(mensajeInicial()))
while (opcion != productos.length + 1){
    
    let productoActual = productos[opcion - 1]
    let unidades = pedirUnidades(productoActual)
    productoActual.setCantidad(unidades)
    let cantidad = productoActual.calcularSubtotal();
    
    carrito.push({"producto": productoActual, "cantidad": unidades})
    console.log("Carrito: ", carrito)
    total.push(cantidad)
    opcion = parseInt(prompt(mensajeInicial()))
} 

alert (`Su total fue de $ ${calcularTotal(total)}. \nGracias por su visita.`)
console.log (carrito)