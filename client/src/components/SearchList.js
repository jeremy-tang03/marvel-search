import React from 'react';
import Card from './Card';

function SearchList({ searchedCharacters, onCharClick }) {
  const searchedChars = searchedCharacters.map((char) => (
    <Card
      id={char.id}
      name={char.name}
      thumbnail={char.thumbnail}
      onCharacterClick={onCharClick}
    />
  ));
  return <div>{searchedChars}</div>;
}

export default SearchList;
