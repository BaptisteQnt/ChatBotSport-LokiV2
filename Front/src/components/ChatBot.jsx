import React, { useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput'; // Assure-toi d'importer correctement ce composant
import AthleteInfo from './AthleteInfo'; // Assure-toi d'importer correctement ce composant

const ChatBot = () => {
  const [athleteData, setAthleteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAthleteData = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/api/athlete', { name });
      setAthleteData(response.data);
    } catch (error) {
      setError('Error fetching athlete data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <UserInput onSubmit={fetchAthleteData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {athleteData && <AthleteInfo data={athleteData} />}
    </div>
  );
};

export default ChatBot;