/* eslint-disable no-console */
// import assert from 'node:assert/strict';

const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

export {
  somaHorasExtras,
  calculaDescontos,
};

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
