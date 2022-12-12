/* eslint-disable linebreak-style */
import {
  afterEach, beforeEach, describe, expect, it, jest, test,
} from '@jest/globals';
import request from 'supertest';
import app from '../../../livraria/src/app';

let server;
let idEditora;

/* hooks: uma função ou método que é chamado quando queremos dar ao programa um
comportamento específico em alguma determinada circunstância, como por exemplo
antes, durante ou depois de determinado código ser executado */
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('POST em /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const response = await request(app)
      .post('/editoras')
      .send({ nome: 'Penguin Books', email: 'penguin-books@email.com', cidade: 'London' })
      .expect(201);

    idEditora = response.body.content.id;
  });

  // testando uma bad request:
  it('Não deve adicionar nada ao passar o body vazio', async () => {
    await request(app).post('/editoras').send({}).expect(400);
  });
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    await request(app).get('/editoras').expect(200);
  });

  it('Deve retornar uma lista de editoras em formato JSON', async () => {
    const response = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(response.body[0]).toEqual(expect.objectContaining({
      id: expect.any(Number),
      nome: expect.any(String),
      email: expect.any(String),
      cidade: expect.any(String),
      created_at: expect.any(String),
      updated_at: expect.any(String),
    }));
  });
});

describe('GET em /editoras/id', () => {
  it('Deve retornar a editora selecionada', async () => {
    await request(app).get(`/editoras/${idEditora}`).expect(200);
  });
});

describe('PUT em /editoras/id', () => {
  it.skip('Deve alterar o campo nome', async () => {
    await request(app)
      .put(`/editoras/${idEditora}`)
      .send({ nome: 'Penguin companhia' })
      .expect(204);
  });

  test.skip.each([
    ['nome', { nome: 'Penguin' }],
    ['cidade', { cidade: 'Londres' }],
    ['email', { email: 'penguinco@email.com' }],
  ])('Deve alterar o campo %s (usando .each)', async (chave, param) => { // "chave" serve para alterar o nome do teste (%s)
    await request(app).put(`/editoras/${idEditora}`).send(param).expect(204);
  });

  test.each([
    ['nome', { nome: 'Penguin' }],
    ['cidade', { cidade: 'Londres' }],
    ['email', { email: 'penguinco@email.com' }],
  ])('Deve alterar o campo %s (usando jest.spyOn)', async (chave, param) => {
    const requisicao = { request }; // request é importado de supertest
    const spy = jest.spyOn(requisicao, 'request'); // objeto a ser "espionado", método que será usado

    await requisicao.request(app).put(`/editoras/${idEditora}`).send(param).expect(204);
    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE em /editoras/id', () => {
  it('Deve deletar a última editora adicionada', async () => {
    await request(app).delete(`/editoras/${idEditora}`).expect(200);
  });
});
