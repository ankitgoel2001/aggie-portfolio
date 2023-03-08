import React, { useEffect, useState } from 'react';

const AggieCard = () => {
  const [cardData, setCardData] = useState<any>(null);

  useEffect(() => {
    fetch('https://some-aggi-card-api.com')
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {cardData ? (
        <div>
          <h2>Aggie Card</h2>
          <img src={cardData.image} alt="Aggie Card" />
          <p>Name: {cardData.name}</p>
          <p>Student ID: {cardData.studentId}</p>
          <p>Major: {cardData.major}</p>
        </div>
      ) : (
        <p>Loading Aggie Card...</p>
      )}
    </div>
  );
};

export default AggieCard;
