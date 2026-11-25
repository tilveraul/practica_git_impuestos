/**
 * Suma el IVA a un precio.
 * @param {number} precio - Precio sin IVA.
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio con IVA.
 */
function conIva(precio, iva = 21) {
  return precio + (precio * iva) / 100;
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio - Precio original.
 * @param {number} descuento - Porcentaje de descuento (0-100).
 * @returns {number} Precio con descuento.
 */
function conDescuento(precio, descuento) {
  return precio - (precio * descuento) / 100;
}

/**
 * Calcula el precio final: descuento y luego IVA.
 * @param {number} precio - Precio base.
 * @param {number} descuento - Porcentaje de descuento (0-100).
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio final.
 */
function precioFinal(precio, descuento, iva = 21) {
  return conIva(conDescuento(precio, descuento), iva);
}

module.exports = { conIva, conDescuento, precioFinal };