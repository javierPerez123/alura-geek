const pError = (texto) => {
    const elemento = document.createElement('p');
    elemento.classList.add('pError0');
    elemento.innerHTML = texto
    return elemento
}

const inputs = document.querySelectorAll('input[class^="formulario__entrada"]');
inputs.forEach(
    input => {
        input.onfocus = function () {
            input.previousElementSibling.classList.add('focus');
            input.classList.remove('error1')
            input.classList.add('bottom')
            const divP = input.parentElement.parentElement.querySelector('p')
            divP.remove()

        }
        input.onblur = function () {
            input.value = input.value.trim();
            const id = input.getAttribute('id')
            let nombreInput;
            if (id == "name") {
                nombreInput = "Nombres"
            }
            if (id == "mensaje") {
                nombreInput = "Mensaje"
            }
            if (input.value.trim().length == 0) {
                input.previousElementSibling.classList.remove('focus');
                input.classList.add('error1')

                if (input.parentElement.parentElement.querySelector('p') == null) {
                    input.parentElement.parentElement.appendChild(pError(`Campo ${nombreInput} no debe estar en blanco o vacío.`))
                }
            }
            else {
                input.classList.remove('error1')
                if (input.parentElement.parentElement.querySelector('p') != null) {
                    const divP = input.parentElement.parentElement.querySelector('p')
                    divP.remove()
                }

            }

            if (input.value.trim().length == 1 || input.value.trim().length == 2) {
                input.classList.add('error1')
                if (input.parentElement.parentElement.querySelector('p') == null) {
                    input.parentElement.parentElement.appendChild(pError(`Campo ${nombreInput} debe ser valido.`))
                }
            }

            input.classList.remove('bottom')

        }
    }
);
