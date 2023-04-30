let nombre;
let producto;
let precio = 0;

function bienvenida (){
    nombre = prompt("Ingrese su nombre");
    alert("Bienvenido a Burgers " + nombre);
};

function productos (){
    do{
        producto = prompt("Ingrese cual es la hamburguesa que desea agregar a su pedido: \n(1) Doble Cuarto: $1700 \n(2) Doble Veggie: $1800 \n(3) Triple Monster: $2100");

    }while(producto != 1 && producto != 2 && producto != 3){
        switch(producto){
            case "1":
                precio = 1700;
                producto = "Doble Cuarto";
                break;

            case "2":
                precio = 1800;
                producto = "Doble Veggie";
                break;

            case "3":
                precio = 2100;
                producto = "Triple Monster";
                break;
        };
    };
};

function abonar (nombre,producto,precio){
    alert(nombre + " usted agrego la burger " + producto + " y el total de su pedido es $" + precio);
    let cobrar = parseFloat(prompt("Ingrese con cuanto dinero desea abonar su pedido"));
    if(cobrar >= precio){
        alert(nombre + " usted pago con $" + cobrar + " y su vuelto es de $" + (cobrar - precio) + "\nMuchas gracias por confiar en nosotros, que disfrute su hamburguesa.");
    }else{
        alert("Lo sentimos, usted no tiene dinero suficiente para poder realizar este pedido");
    };
};

bienvenida();
productos();
abonar(nombre, producto, precio);