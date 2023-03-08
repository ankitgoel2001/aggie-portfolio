import React from 'react';
import { FormInput } from './types';

function IDCard({ name, email, phone, photo, location, year, major, gradDate }: FormInput) {
  return (
    <div>
      <img src={photo} alt={name} />
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{location}</p>
      <p>{year} - {major}</p>
      <p>Graduates {gradDate}</p>
    </div>
  );
}

export default IDCard;
