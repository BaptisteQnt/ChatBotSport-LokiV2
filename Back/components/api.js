// api.js
import OpenAI from 'openai';
import { API_KEY, ORGANISATION_ID } from '../cle.env.js';

const openai = new OpenAI({
  apiKey: API_KEY,
  organization: ORGANISATION_ID,
});

export const getAthleteInfo = async (name) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": "Tu vas me sortir un JSON avec les parametres suivants :\n Son pays d'origine :\n  le sport qu'il pratique : \n son club ou son equipe :"
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `Donne-moi des informations sur l'athlète nommé ${name}.`
            }
          ]
        }
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API OpenAI:', error);
    throw new Error('Erreur interne du serveur');
  }
};
