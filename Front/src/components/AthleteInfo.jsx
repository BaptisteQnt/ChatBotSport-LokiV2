import React from 'react';
// import './AthleteInfo.css'; // Assurez-vous d'ajouter votre feuille de style CSS

const AthleteInfo = ({ data }) => {
  console.log(data);
  return (
    <div className='info'>
      <h2 className='title-response'>Athlete Information</h2>
      <div className='info-details'>
        <p><strong>Nom:</strong> {data.data.nom}</p>
        <p><strong>Prenom:</strong> {data.data.prenom}</p>
        <p><strong>Année de naissance :</strong> {data.data.annee_de_naissance}</p>
        <p><strong>Sa Taille:</strong> {data.data.taille}</p>
        <p><strong>Pays d'origine :</strong> {data.data.pays_dorigine}</p>
        <p><strong>Sport :</strong> {data.data.sport}</p>
        <p><strong>Club :</strong> {data.data.club}</p>
      </div>
    </div>
  );
};

export default AthleteInfo;
