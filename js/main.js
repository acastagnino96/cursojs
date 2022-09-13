let productos = [
    {nombre: "Axilas", precio:500},
    {nombre: "Espalda", precio:1500},
    {nombre: "Piernas completas", precio:2500},
    {nombre: "Media pierna", precio:1700},
    {nombre: "Abdomen", precio:1000},
    {nombre: "Rostro completo", precio:1500},
];

function mensajeInicial (){
    let mensaje = "Hola! De qué zona te gustaría comprar sesiones de depilación?";
    let count = 1;

    for(let producto of productos){
        mensaje += `\n${count}- ${producto.nombre} - $ ${producto.precio}`
        count ++
    }

    mensaje += `\n${count}- Salir`
    return mensaje
}

function unidades (producto){
    return prompt(`¿Cuántas sesiones de ${producto.nombre} desea comprar?`)
}

function subtotal (unidades, producto){
    alert(`Se agregaron a tu carrito ${unidades} sesiones de ${producto.nombre} por $ ${unidades * producto.precio}`)
    return unidades * producto.precio
}

function calcularTotal (arr){
    return arr.reduce((acc, el) => acc + el, 0)
}

let opcion = 0
let total = []
let carrito = []

do {
    opcion = parseInt(prompt(mensajeInicial()))

    if (opcion === productos.length + 1){
        alert (`Su total fue de $ ${calcularTotal(total)}. \nGracias por su visita.`)
        console.log (carrito)
        break;
    }

    let productoActual = productos[opcion - 1]
    let cantidad = subtotal(unidades(productos[opcion - 1]), productoActual)

    carrito.push({productoActual})
    total.push(cantidad)

} while (true)