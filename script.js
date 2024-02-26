// Print Valores 
document.getElementById("btn_calcular").addEventListener("click", function() {
    var AVA = document.getElementById("nota_AVA").value;
    var PROVA = document.getElementById("nota_PROVA").value;

    // Formula = MF = PROVA x 0,6 + AVA x 0,4
    var MF = (PROVA * 0.6) + (AVA * 0.4)

    // verifica Aprovado ou reprovado
    var status = (MF >= 5) ? "APROVADO" : "REPROVADO";

    alert(`SUA NOTA FOI: ${MF.toFixed(1)} PORTANTO VOCÊ FOI ${status}`)

    var AVA = document.getElementById("nota_AVA").value = "";
    var PROVA = document.getElementById("nota_PROVA").value = "";
})


