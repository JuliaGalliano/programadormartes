function encontrarmayor() {
    const num = document.getElementById("numeros").value;//trae del html los nº que escribió el usuario c/ el id "numeros"
    const numeros =
        num.split(`,`).map(Number); //split: divide el txt en partes c/ el separador () que yo indique "," y map(Number) convierte un string en número
    let mayor = numeros[0]; //declaro var con el nombre "mayor" y le asigno el primer nº que el usuario ingresó
    for (let i = 1; i < numeros.length; i++) {// indice=0 ;cuando el i < cantidad de elementos; suma 1 vuelta al bucle
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    document.getElementById("mayor").textContent = mayor; //imprime por pantalla
    console.log("El numero mayor es: " + mayor); //imprime en consola
}
