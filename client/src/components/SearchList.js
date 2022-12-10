import React from 'react';
import Card from './Card';

function SearchList({ searchedCharacters, onCharClick }) {
  const searchedChars = searchedCharacters.map((char, index) => 
    <Card
      id={char.id}
      name={char.name}
      thumbnail={char.thumbnail}
      onCharacterClick={onCharClick}
      key={index}
    />
  );
  return <div>{searchedChars}</div>;
}

export default SearchList;
