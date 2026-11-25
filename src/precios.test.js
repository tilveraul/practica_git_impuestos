const { conIva, conDescuento, precioFinal } = require('./precios');

test('conIva suma el 21% por defecto', () => {
  expect(conIva(100)).toBe(121);
});

test('conDescuento aplica el porcentaje', () => {
  expect(conDescuento(100, 10)).toBe(90);
});

test('precioFinal aplica descuento y luego IVA', () => {
  expect(precioFinal(100, 10)).toBeCloseTo(108.9);

});


/**
 * Suma el IVA a un precio.
 * @param {number} precio - Precio sin IVA.
 * @param {number} [iva=21] - Porcentaje de IVA.
 * @returns {number} Precio con IVA.
 * @throws {RangeError} Si el precio es negativo.
 */
function conIva(precio, iva = 21) {
  if (precio < 0) throw new RangeError('El precio no puede ser negativo');
  return precio + (precio * iva) / 100;
}