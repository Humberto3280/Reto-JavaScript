# Reto JavaScript: Control de entrada para direcciones IP
<p>Se quiere implementar un cuadro de texto (input de tipo text) que permita el ingreso de direcciones IP de manera interactiva aplicando las reglas de validación necesarias y suficientes para garantizar el formato adecuado de una dirección IP, mientras el usuario escribe. Se debe usar JavaScript puro o jQuery preferiblemente. Recuerden que la validación se debe realizar mientras el usuario esta escribiendo. Las reglas mínimas son:</p>
<ul>
  <li>Primer carácter diferente de punto '.'</li>
  <li>Máxima longitud de la cadena 15 caracteres, pero debe cambiar de acuerdo a los caracteres que se vayan digitando</li>
  <li>Mínima longitud de cadena 7 caracteres</li>
  <li>Máximo 3 caracteres de punto</li>
  <li>Máximo 4 grupos de 3 dígitos</li>
  <li>Eliminar los ceros a la izquierda en los grupos de 3 dígitos</li>
  <li>Valor numérico de cada grupo en el rango entre 0 y 255</li>
  <li>No se permiten puntos consecutivos</li>
  <li>Autocompletar el punto después de digitar 3 caracteres numéricos consecutivos</li>
  <li>Solo se permiten caracteres numéricos y el punto, no se permiten letras u otros caracteres especiales</li>
  <li>No se permite copiar y pegar en el cuadro de texto</li>
</ul>
