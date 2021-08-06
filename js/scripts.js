// Validad formulario

const inputs = document.querySelectorAll('form .campo input');

// listener a los inputs
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
})

inputs.forEach(input => {
    input.addEventListener('input', validarInput);
})

function validarInput(e) {

    const estado = ['valido', 'no-valido'];
    
    let clase;
    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }
    // inyectar dinamicamente el div con el error
    if (clase === 'no-validar') {
        
    } else {
        
    }
}