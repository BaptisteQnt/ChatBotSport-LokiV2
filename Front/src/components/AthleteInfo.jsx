import React from 'react';

const AthleteInfo = ({ data }) => {
  return (
    <div>
      <h2>Athlete Information</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AthleteInfo;