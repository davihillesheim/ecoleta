import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuários');

  response.json([
    'Davi',
    'John',
    'Carl',
  ]);
});

app.listen(3333);