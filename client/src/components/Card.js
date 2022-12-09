import React from 'react';

function Card({ id, name, thumbnail }) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div className="tc bg-white dib br3 pa1 ma2 grow bw2 shadow-5" data-id={id}>
      <img className="br3 dib"src={imageUrl} alt={`${name}`} width="200px" height="200px" />
      <p>{name}</p>
    </div>
  );
}

export default Card;
