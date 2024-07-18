// test/server.test.js
import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('GET /', () => {
  it('should return a message indicating the server is running', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Le serveur fonctionne !');
  });
});

describe('POST /api/athlete', () => {
  it('should return an error if no name is provided', async () => {
    const res = await request(app)
      .post('/api/athlete')
      .send({});
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property('error', "Le nom de l'athlète est requis");
  });

  it('should return athlete data if name is provided', async function() {
    this.timeout(10000); // Augmente le délai d'attente à 10 secondes
    const res = await request(app)
      .post('/api/athlete')
      .send({ name: 'Usain Bolt' });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('data'); // Vérifiez le contenu en fonction de votre réponse attendue
  });
});
