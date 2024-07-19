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
          "content": "Tu es un assistant qui génère des réponses en format JSON uniquement. Réponds uniquement en JSON avec les clés suivantes : nom, prenom, annee_de_naissance ,pays_dorigine, sport, club, taille."
        },
        {
          "role": "user",
          "content": `Donne-moi des informations sur l'athlète nommé ${name}.`
        }
      ],
      max_tokens: 150,
    });

    // Parsing the response to JSON
    
    const jsonResponse = JSON.parse(response.choices[0].message.content.trim());
    console.log(jsonResponse);
    return jsonResponse; // Accessing the data key
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API OpenAI:', error);
    throw new Error('Erreur interne du serveur');
  }
};
