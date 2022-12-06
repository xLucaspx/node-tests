/* eslint-disable no-undef */
/* eslint-disable no-console */
// import assert from 'node:assert/strict';

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

// Estrutura de testes construída do zero:

// const verifiqueSe = (valor) => {
//   const assercoes = {
//     ehExatamenteIgualA(valorEsperado) {
//       assert.strictEqual(valor, valorEsperado);
//     },
//   };

//   return assercoes;
// };

// const teste = (titulo, funcaoDeTeste) => {
//   try {
//     funcaoDeTeste();
//     console.log(`${titulo} passou!`);
//   } catch (e) {
//     console.error(`${titulo} não passou!`);
//   }
// };

// teste('somaHorasExtras', () => {
//   const valorEsperado = 2675;
//   const retorno = somaHorasExtras(2500, 175);

//   verifiqueSe(retorno).ehExatamenteIgualA(valorEsperado);
// });

// teste('calculaDesconto', () => {
//   const valorEsperado = 2850;
//   const retorno = calculaDescontos(3000, 150);

//   verifiqueSe(retorno).ehExatamenteIgualA(valorEsperado);
// });
