function calcularRecibos() {
    // Obtener los valores ingresados por el usuario
    let valoresRecibos = {
        agua: parseFloat(document.getElementById('agua').value) || 0,
        luz: parseFloat(document.getElementById('luz').value) || 0,
        internet: parseFloat(document.getElementById('internet').value) || 0,
        gas: parseFloat(document.getElementById('gas').value) || 0,
    };

    let sumaTotal = 0;

    // Calcular la suma total
    Object.values(valoresRecibos).forEach(valor => {
        sumaTotal += valor;
    });

    let totalAPagar = sumaTotal / 2;

    // Mostrar resultados en el div de resultados
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>La suma total de los recibos es: $${sumaTotal}</p>
        <p style="color: red;">El total a pagar es: $${totalAPagar}</p>
    `;
    
}