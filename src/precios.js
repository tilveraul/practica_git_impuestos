/**
 * Suma el IVA a un precio.
 * @param {number} precio - Precio sin IVA.
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio con IVA.
 * @throws {RangeError} Si el precio es negativo.
 */
function conIva(precio, iva = 21) {
   if (precio < 0) throw new RangeError(`El precio no puede ser negativo (recibido: ${precio})`);
  return precio + (precio * iva) / 100;
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio - Precio original.
 * @param {number} descuento - Porcentaje de descuento (0-100).
 * @returns {number} Precio con descuento.
 * @throws {RangeError} Si el descuento está fuera del rango 0-100.
 */
function conDescuento(precio, descuento) {
  if (descuento < 0 || descuento > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
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