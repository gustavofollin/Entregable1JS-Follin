let presentacion = "Hola bienvenido a la compra de componentes para pc"
alert(presentacion)

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
}

solicitarNombre();

let edad = prompt("¿Ahora podrias ingresar tu edad?")
if(edad >= "18"){
    alert("Ahora podemos continuar")
}else{
    alert("No tenes la mayoria de edad para continuar")
}

const componentes = []

let quiereComprar = confirm("¿Le gustaria que le mostrara los productos?")

if(quiereComprar == true){
   let productosAComprar = prompt("Va a llevar Placa Nvidia, Fuente 750W o Motherboard")
   switch(productosAComprar){
    case "Placa Nvidia":
        componentes.push("Placa Nvidia")
        quiereComprar = confirm("¿Quiere seguir comprando mas?")
        if(quiereComprar){
        productosAComprar = prompt("Va a llevar Placa Nvidia, Fuente 750W o Motherboard")
        }
        break
    case "Fuente 750W":
        componentes.push("Fuente 750W")
        quiereComprar = confirm("¿Quiere seguir comprando mas?")
        if(quiereComprar){
            productosAComprar = prompt("Va a llevar Placa Nvidia, Fuente 750W o Motherboard")
            }
        break
    case "Motherboard" :
        componentes.push("Motherboard")
        quiereComprar = confirm("¿Quiere seguir comprando mas?")
        if(quiereComprar){
            productosAComprar = prompt("Va a llevar Placa Nvidia, Fuente 750W o Motherboard")
            }
        break
    default:
        alert("Gracias por su compra")
    }
}else{
    alert("Nos vemos que tenga buen dia")
}







