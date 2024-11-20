function datos_inversion(){
    const nombre = document.getElementById("nombres").value
    const telefono = document.getElementById("telefono").value
    const email = document.getElementById("email").value
    const monto = parseFloat(document.getElementById("inversion").value)
    const tiempo = document.getElementById("tiempo").value
    const despues = document.getElementById("post")
    const antes = document.getElementById("pre")
    despues.classList.remove("disabled")
    antes.classList.add("disabled")

    const tiempos = document.getElementById("tiempo-show")
    const interes = document.getElementById("interes-show")
    const total = document.getElementById("total-show")
    const ganancia = document.getElementById("ganancia-show")
    const nombres = document.getElementById("nombres-show")
    const emails = document.getElementById ("email-show")
    nombres.innerText = nombre
    emails.innerText = email

    switch (tiempo) {
        case "1":
            tiempos.innerText ="12 meses"
            interes.innerText = "0.8%"
            let interes_anual = (monto * 0.008) * 12 
            let totalDinero = interes_anual + monto
            total.innerText = totalDinero
            ganancia.innerText = interes_anual.toFixed(0)
            break

        case "2":
            tiempos.innerText ="24 meses"
            interes.innerText = "1.3%"
            let intereses_anual = (monto * 0.013 ) * 24 
            let totalDineros = intereses_anual + monto
            total.innerText = totalDineros
            ganancia.innerText = intereses_anual.toFixed(0)
            
            break

        case "3":
            tiempos.innerText ="36 meses"
            interes.innerText = "1.7%"
            let Intereses_anual = (monto * 0.017 ) * 36
            let TotalDineros = Intereses_anual + monto
            total.innerText = TotalDineros
            ganancia.innerText = Intereses_anual.toFixed(0)
            
            break
    
        default:
            break
    }
} 

document.getElementById("simulador-btn").addEventListener("click", datos_inversion)

