function determinarTransporte() {
    let distancia = parseInt(document.getElementById("distancia").value);//trae del html los nº que escribió el usuario c/ el id "numeros"
    let resultado = "";

    if (distancia >= 0 && distancia <= 1000) {
        resultado = "Ir a pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        resultado = "Usar bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        resultado = "Tomar colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        resultado = "Usar auto";
    } else if (distancia > 100000) {
        resultado = "Viajar en avión";
    }
    document.getElementById("resultado").textContent = resultado;
}
