import React from 'react';

function Card({id, name, thumbnail}) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`
  return(
    <div data-id={id}>
      <img src={imageUrl} alt={`${name}`} />
      <p>{name}</p>
    </div>
  );
}

export default Card;