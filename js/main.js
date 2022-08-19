
let simulador = true
const listaPersonas = []
while (simulador) {
    let dolar = 300
    let euro = 250
    let libra = 350
    let nombres = prompt("Ingrese su nombre completo para continuar la operacion")
listaPersonas.push(nombres.toUpperCase());
console.log(listaPersonas);
    let monedaElegida = prompt(nombres + " elige la moneda en la que queiras el cambio: \n1.Dolar \n2.Euro \n3.Libra").toLowerCase()
    alert("Seleccionaste tu cambio en " + monedaElegida)
    if (monedaElegida == "dolar") {
        let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
        let montoCambiado = montoCambiar / dolar
        alert("Cambiaste " + montoCambiar +" pesos por " + montoCambiado + " Dolares")
    } else if (monedaElegida == "euro") {
        let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
        let montoCambiado = montoCambiar / euro
        alert("Cambiaste " + montoCambiar + " pesos por " + montoCambiado + " Euros")
} else if (monedaElegida == "libra") {
    let montoCambiar = Number(prompt("¿Cuanto quieres cambiar?"))
    let montoCambiado = montoCambiar / libra
    alert("Cambiaste " + montoCambiar + " pesos por " + montoCambiado + " Libras")
    }
    if (confirm("¿ Desea hacer otra operacion?")){
            alert("Muy bien!! \n vamos con las siguiente operacion")
}
}