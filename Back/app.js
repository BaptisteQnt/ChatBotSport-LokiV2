// app.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getAthleteInfo } from './components/api.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:9000'
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Le serveur fonctionne !');
});

app.post('/api/athlete', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Le nom de l\'athlète est requis' });
  }

  try {
    const athleteInfo = await getAthleteInfo(name);
    res.json({ data: athleteInfo });
  } catch (error) {
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

export default app;
