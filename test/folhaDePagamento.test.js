/* eslint-disable no-undef */
import { calculaDescontos, somaHorasExtras } from '..';

describe('Testes dos cálculos de folha', () => {
  test('Deve retornar a soma das horas exatas', () => {
    const valorEsperado = 3150;
    const retorno = somaHorasExtras(3000, 150);

    expect(retorno).toBe(valorEsperado);
  });

  // para o Jest, test == it; it é mais semântico
  it('Deve descontar o valor do salário', () => {
    const valorEsperado = 2950;
    const retorno = calculaDescontos(3150, 200);

    expect(retorno).toBe(valorEsperado);
  });
});
