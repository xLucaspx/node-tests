import Carrinho from '../../carrinho/carrinho';
import Item from '../../carrinho/item';

/* eslint-disable no-undef */
describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toHaveLength(0);
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it('Deve guardar itens', () => {
    const item0 = new Item('Abacaxi', 7.5, 2);
    const item1 = new Item('Melão', 9, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item0);
    carrinho.adiciona(item1);

    expect(typeof carrinho).toBe('object');
    // uma forma de verificar itens em um array:
    expect(carrinho.itens[0]).toBe(item0);
    // outra forma de verificar itens em um array:
    expect(carrinho.itens).toContain(item1);
  });

  it('Deve possuir a propriedade "total"', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    // Comportamento que causa um erro englobado em uma function
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(17.5);

    expect(carrinho.frete).toBe(17.5);
  });

  it('Deve finalizar as compras', () => {
    const item0 = new Item('Coquinha', 7.50, 2);
    const item1 = new Item('Stelinha', 6, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(item0);
    carrinho.adiciona(item1);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({ subtotal: 45, frete: 10, total: 55 });
  });
});
