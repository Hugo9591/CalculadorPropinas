# Calculadora de Propinas

Este proyecto es una calculadora de propinas sencilla pero funcional, hecha con React y TypeScript. Tiene un menú con varios platillos, 
puedes elegir la cantidad de cada uno y ver automáticamente cuánto pagarías, incluyendo la propina, lainformacion de los alimentos esta en un archivo aparte guardado en un arreglo de objetos simulando una api.

## Funcion

- En el lado izquierdo se muestra un menú con diferentes comidas, cuando seleccionas un platillo, aparece del lado derecho, su nombre, precio y la cantidad en caso de que se seleccione la misma comida mas de dos veces tambien aparece una opcion para elegir si quieres dejar el 10, 20 o 50% de propina
  
- Se muestra:
  - Subtotal(precio × cantidad)
  - Propina(según el porcentaje elegido)
  - Total final (suma del subtotal + propina)

## Tecnologías
React, Lógica de la interfaz
Tailwind CSS, Estilos rápidos y modernos
TypeScript, Tipado fuerte en componentes

## Instalación local
- git clone https://github.com/Hugo9591/CalculadorPropinas.git
- cd calculadorPropinas
- npm install
- npm run dev
- Luego abre http://localhost:5173 en tu navegador.

Hecho con fines educativos y como práctica de React con TypeScript.
