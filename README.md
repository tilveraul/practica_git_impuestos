# Práctica Git — Cálculo de precios con impuestos

Proyecto mínimo en JavaScript para la práctica de **Entorno de desarrollo y control de versiones (UD2)**.

## Descripción

Aplicación de ejemplo con tres funciones para calcular precios:

- `conIva(precio, iva)`: suma el IVA a un precio.
- `conDescuento(precio, descuento)`: aplica un descuento porcentual.
- `precioFinal(precio, descuento, iva)`: aplica descuento y luego IVA.

Incluye un ejemplo de uso en `index.js` y pruebas unitarias con Jest.

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd practica-git-impuestos
npm install