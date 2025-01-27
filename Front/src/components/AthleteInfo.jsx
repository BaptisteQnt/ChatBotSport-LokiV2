import React from 'react';

const AthleteInfo = ({ data }) => {
  return (
    <div className='info'>
      <h2 className='title-response'>Athlete Information</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AthleteInfo;