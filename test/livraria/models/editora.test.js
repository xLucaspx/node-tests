import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../../livraria/src/models/editora';

describe('Testando o modelo "Editora"', () => {
  const objetoEditora = {
    nome: 'Zahar',
    cidade: 'Rio de Janeiro',
    email: 'zahar_pub@email.com',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  // it.skip pula o teste
  it.skip('Deve salvar editora no banco de dados', () => {
    const editora = new Editora(objetoEditora);
    editora.salvar().then((dados) => expect(dados.nome).toBe('Zahar'));
  });

  // o teste manipula o banco de dados:
  it.skip('Deve salvar editora no banco de dados com async/await', async () => {
    const editora = new Editora(objetoEditora);
    const dados = await editora.salvar();
    const retorno = await Editora.pegarPeloId(dados.id);

    expect(retorno).toEqual(expect.objectContaining({
      id: expect.any(Number),
      ...objetoEditora,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    }));
  });

  // teste usando mock:
  it('Deve simular uma chamada ao banco de dados', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 6,
      ...objetoEditora,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
    });

    expect(editora.salvar()).toEqual(expect.objectContaining({
      id: expect.any(Number),
      ...objetoEditora,
      created_at: expect.any(String),
      updated_at: expect.any(String),
    }));
  });
});
