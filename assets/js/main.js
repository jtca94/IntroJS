const selColor = document.querySelector("#selColor");
const cantidad = document.querySelector("#cantidad");
const btnCalcular = document.querySelector("#btnCalcular")
const total = document.querySelector("#total");
const colorElejido = document.querySelector("#color");
const valor = 689000;
const cero = "Valor no válido";

selColor.addEventListener("change", () => {
    const colorSelected = selColor.value
    colorElejido.style.backgroundColor = colorSelected;  
});

btnCalcular.addEventListener("click", () => {
    if (cantidad.value > 15) {
        alert("El stock máximo de compra son 15 elementos");
    }
    else if (cantidad.value <= 0) {
        cantidad.value = `${cero}`;
    }
    else {
        const multiplicacion = valor*cantidad.value
        total.innerHTML = Intl.NumberFormat('de-DE').format(multiplicacion);
    }

})
     
