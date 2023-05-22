let nombre;
const pedido = [];
let total = 0;
let continuar = true;

const hamburguesas = [
    { id: 1, nombre: "Crispy Burger", precio: 2300 },
    { id: 2, nombre: "American Burger", precio: 2500 },
    { id: 3, nombre: "Fresh Burger", precio: 2350 },
    { id: 4, nombre: "Oklahoma Burger", precio: 2900 },
    { id: 5, nombre: "Vegeta Burger", precio: 2500 }
];

function bienvenida() {
    nombre = prompt("Ingrese su nombre");
    alert("Bienvenido a Burgers Bros " + nombre);
}

function mostrarMenu() {
    let mensaje = "Menú de Hamburguesas:\n\n";

    hamburguesas.forEach(function (hamburguesa) {
        mensaje += "(" + hamburguesa.id + ") " + hamburguesa.nombre + ": $" + hamburguesa.precio + "\n";
    });

    return mensaje;
}

function obtenerHamburguesa(id) {
    return hamburguesas.find(function (hamburguesa) {
        return hamburguesa.id === id;
    });
}

function abonar(nombre, pedido, total) {
    let mensajePedido = "Usted ha agregado:\n\n";

    pedido.forEach(function (hamburguesa) {
        mensajePedido += hamburguesa.cantidad + " x " + hamburguesa.nombre + "\n";
    });

    mensajePedido += "\nTotal a pagar: $" + total.toFixed(2);

    alert(nombre + ", su pedido es el siguiente:\n\n" + mensajePedido + "\n\n¡Gracias por su compra, que disfrute su Burger!");

    let cobrar = parseFloat(prompt("Ingrese con cuánto dinero desea abonar su pedido"));

    if (cobrar >= total) {
        alert(
            nombre + ", usted pagó con $" + cobrar + " y su vuelto es de $" + (cobrar - total) + "\nMuchas gracias por confiar en nosotros, que disfrute su hamburguesa.");
    } else {
        alert("Lo sentimos, usted no tiene dinero suficiente para poder realizar este pedido");
    }
}

bienvenida();

do {
    let menu = mostrarMenu();
    let producto = parseInt(prompt(menu + "\nIngrese el número de la hamburguesa que desea agregar a su pedido"));
    let hamburguesaElegida = obtenerHamburguesa(producto);

    if (hamburguesaElegida) {
        let cantidad = parseInt(prompt("Ingrese la cantidad de hamburguesas " + hamburguesaElegida.nombre + " que desea agregar"));

        if (cantidad > 0) {
            hamburguesaElegida.cantidad = cantidad;
            pedido.push(hamburguesaElegida);
            total += hamburguesaElegida.precio * cantidad;

            let agregarOtra = prompt("¿Desea agregar otra hamburguesa? (Si/No)").toLowerCase();
            if (agregarOtra === "no") {
                abonar(nombre, pedido, total);
                break;
            }
        } else {
            alert("Cantidad inválida. Por favor, ingrese un número válido.");
        }
    } else {
        alert("Opción inválida. Por favor, seleccione un número válido del menú.");
    }
} while (continuar);
