const formulario = document.forms[0]
const parrafo=document.getElementById('advertencia')

document.addEventListener('submit', e => {
    e.preventDefault()
    let advertencia = "";
    let validacionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    for (let i = 0; i < formulario.length-2; i++) {
        let campo = formulario[i]
        if (campo.value == "") {
            advertencia += `• Ingrese ${campo.name} </br>`
        }
    }
        if (!validacionCorreo.test(correo.value)) {
            advertencia += `• El correo electrónico no es válido <br></br>`
        }
    

    parrafo.innerHTML = advertencia;

})