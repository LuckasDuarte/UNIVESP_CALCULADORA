// Print Valores 
document.getElementById("btn_calcular").addEventListener("click", function() {
    var AVA = document.getElementById("nota_AVA").value;
    var PROVA = document.getElementById("nota_PROVA").value;

    // Formula = MF = PROVA x 0,6 + AVA x 0,4
    var MF = (PROVA * 0.6) + (AVA * 0.4)

    // verifica Aprovado ou reprovado
    var status = (MF >= 5) ? "APROVADO" : "REPROVADO";

    var color = (MF >= 5) ? "#00a500" : "#ef4444"

    // alert(`SUA NOTA FOI: ${MF.toFixed(1)} PORTANTO VOCÊ FOI ${status}`)
    Toastify({
        text: `SUA NOTA FOI: ${MF.toFixed(1)} PORTANTO VOCÊ FOI ${status}`,
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background:`${color}`,
            
        },
      }).showToast();

    var AVA = document.getElementById("nota_AVA").value = "";
    var PROVA = document.getElementById("nota_PROVA").value = "";
})


