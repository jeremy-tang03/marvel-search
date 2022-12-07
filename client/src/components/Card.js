import React from 'react';

function Card({ id, name, thumbnail }) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div data-id={id}>
      <img src={imageUrl} alt={`${name}`} width="200px" height="200px" />
      <p>{name}</p>
    </div>
  );
}

export default Card;
