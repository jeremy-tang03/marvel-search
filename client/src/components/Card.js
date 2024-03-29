import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ id, name, thumbnail, onCharacterClick }) {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <div
      className="character-card tc bg-white dib br3 pa1 ma2 grow bw2 shadow-5"
      data-id={id}
      onClick={onCharacterClick}
    >
      <LazyLoadImage
        className="br3 dib"
        src={imageUrl}
        alt={`${name}`}
        width="200px"
        height="200px"
      />
      <p>{name}</p>
    </div>
  );
}

export default Card;
