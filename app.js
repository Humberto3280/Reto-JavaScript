const ipInput = document.getElementById('ipInput');
const errorMessage = document.getElementById('errorMessage');

ipInput.addEventListener('input', function () {
    let inputValue = ipInput.value;
    let message = '';

    // Verificar si la entrada contiene caracteres no permitidos
    if (!/^[0-9.]*$/.test(inputValue)) {
        inputValue = inputValue.replace(/[^0-9.]/g, ''); // Eliminar caracteres no permitidos
        ipInput.value = inputValue;
    }
    // Verificar si el primer carácter es un punto
    if (inputValue.startsWith('.')) {
        inputValue = inputValue.slice(1); // Eliminar el primer carácter
        ipInput.value = inputValue; // Actualizar el valor en el campo de entrada
    }
    // Verificar puntos consecutivos
    if (inputValue.includes('..')) {
        inputValue = inputValue.replace('..', '.');
    }
    // Verificar la cantidad de puntos en la entrada
    const countDots = (inputValue.match(/\./g) || []).length;
    if (countDots > 3) {
        inputValue = inputValue.slice(0, -1); // Eliminar el último carácter si es un punto adicional
        ipInput.value = inputValue;
    }
    // Autocompletar un punto después de tres caracteres numéricos consecutivos si no hay más de tres puntos
    if (countDots < 3) {
        inputValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1.');
    }

    // Verificar la cantidad de grupos de tres dígitos y limitar cada grupo a máximo 255
    const groups = inputValue.split('.');
    for (let i = 0; i < groups.length; i++) {
        const num = parseInt(groups[i], 10);
        message = i === 3 ? "Direccion ip Valida" : "Dirección ip invalida";
        if (!isNaN(num) && num > 255) {
            // Verificar que el último grupo tenga máximo 3 dígitos
            const lastGroup = groups[3] || ''; // Obtener el último grupo o una cadena vacía si no existe
            if (lastGroup.length > 3) {
                groups[i] = groups[i].slice(0, -1);
            } else {
                // Si el número es mayor que 255, eliminar el último dígito del grupo
                groups[i] = groups[i].slice(0, -1);
                inputValue = groups.join('.');
                ipInput.value = inputValue;
                message = i === 3 ? "El último dígito del grupo no puede ser mayor que 255." : "El valor del grupo debe estar entre 0 y 255.";
            }
        }
    }

    // Eliminar ceros a la izquierda en grupos de 3 dígitos
    inputValue = groups.map(group => {
        if (group.length > 1 && group.startsWith('0')) {
            return group.replace(/^0+/, ''); // Eliminar ceros a la izquierda
        }
        return group;
    }).join('.');

    ipInput.value = inputValue;

    // Mostrar mensaje de error en el elemento HTML
    errorMessage.textContent = message;
    errorMessage.style.display = message ? "block" : "none";
});

// Evitar copiar en el cuadro de texto
ipInput.addEventListener('copy', function(event) {
    event.preventDefault(); // Evitar que se realice la acción de copiar
});

// Evitar pegar en el cuadro de texto
ipInput.addEventListener('paste', function(event) {
    event.preventDefault(); // Evitar que se realice la acción de pegar
});
