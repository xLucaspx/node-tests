import Item from '../../carrinho/item';

/* eslint-disable no-undef */
describe('Testes dos itens', () => {
  it('Deve ter 3 campos: nome,valor e quantidade', () => {
    const item = new Item('Maçã', 4.5, 10);

    expect(item.nome).toBe('Maçã');
    expect(item.valor).toBe(4.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve calcular o preço com base na quantidade', () => {
    const item1 = new Item('Maçã', 4.5, 10);
    const item2 = new Item('Banana', 0.1, 3);

    expect(item1.pegaValorTotalItem()).toBe(45);
    // toBeCloseTo: para números com ponto flutuante:
    expect(item2.pegaValorTotalItem()).toBeCloseTo(0.3);
  });

  test.each([
    ['Uva', 6.9, 0.7],
    ['Maçã', 4.5, 6],
    ['Laranja', 5.65, 1.5],
  ])('Deve inicializar itens', async (nome, valor, quantidade) => {
    const item = new Item(nome, valor, quantidade);

    expect(item.nome).toBe(nome);
    expect(item.valor).toBe(valor);
    expect(item.quantidade).toBe(quantidade);
  });
});
