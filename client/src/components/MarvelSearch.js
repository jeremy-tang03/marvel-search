import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

const testChars = [
  {
    id: 1009150,
    name: 'Agent Zero',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790',
      extension: 'jpg',
    },
    numComics: 29,
    numSeries: 10,
    numStories: 31,
    numEvents: 0,
  },
  {
    id: 1011198,
    name: 'Agents of Atlas',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5',
      extension: 'jpg',
    },
    numComics: 45,
    numSeries: 13,
    numStories: 52,
    numEvents: 1,
  },
  {
    id: 1011175,
    name: 'Aginar',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    numComics: 0,
    numSeries: 0,
    numStories: 0,
    numEvents: 0,
  },
  {
    id: 1011136,
    name: 'Air-Walker (Gabriel Lan)',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    numComics: 4,
    numSeries: 3,
    numStories: 3,
    numEvents: 1,
  },
  {
    id: 1011176,
    name: 'Ajak',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215',
      extension: 'jpg',
    },
    numComics: 4,
    numSeries: 1,
    numStories: 8,
    numEvents: 1,
  },
];

function MarvelSearch() {
  const [searchedCharacters, setSearchedCharacters] = useState([]);

  function searchCharacters(e) {
    e.preventDefault();
    const query = e.target.search.value;
    const filteredChars = testChars.filter(char => char.name.toLowerCase().includes(query.toLowerCase()))
    setSearchedCharacters(filteredChars)
  }

  function searchList() {
    return (
      <Scroll>
        <SearchList searchedCharacters={searchedCharacters} />
      </Scroll>
    );
  }

  return (
    <section>
      <div>
        <h2>Marvel Graphs</h2>
      </div>
      <div>
        <form onSubmit={searchCharacters}>
          <input
            type="search"
            name="search"
            placeholder="Search Marvel Characters"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {searchList()}
    </section>
  );
}

export default MarvelSearch;
