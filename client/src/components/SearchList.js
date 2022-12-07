import React from 'react';
import Card from './Card';

function SearchList({ searchedCharacters }) {
  const searchedChars = searchedCharacters.map(char =>  <Card  id={char.id} name={char.name} thumbnail={char.thumbnail}/>); 
  return (
    <div>
      {searchedChars}
    </div>
  );
}

export default SearchList;