import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import Chart from './Chart';

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
    numComics: 53,
    numSeries: 62,
    numStories: 23,
    numEvents: 10,
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
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [chartData, setChartData] = useState({});

  function searchCharacters(e) {
    e.preventDefault();
    const query = e.target.search.value;

    if (query === '') return;

    const filteredChars = testChars.filter((char) =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedCharacters(filteredChars);
  }

  function showChart(e) {
    if (isChartVisible) return;

    const charId = e.target.closest('.character-card').dataset.id;
    const selectedChar = testChars.find((char) => char.id === Number(charId));
    console.log(selectedChar);
    setChartData(selectedChar);

    setIsChartVisible(true);
  }

  function closeChart() {
    setIsChartVisible(false);
  }

  function searchList() {
    return (
      <Scroll>
        <SearchList
          searchedCharacters={searchedCharacters}
          onCharClick={showChart}
        />
      </Scroll>
    );
  }

  return (
    <section className="relative">
      <div>
        <h1 className="f2 white title">Marvel Graphs</h1>
      </div>
      <div>
        <form onSubmit={searchCharacters}>
          <input
            className="pa3 bb br3 grow b--none bg-light-red ma3"
            type="search"
            name="search"
            placeholder="Search Marvel Characters"
          />
          <button
            type="submit"
            className="pa3 bb br3 grow b--none bg-white ma1"
          >
            Search
          </button>
        </form>
      </div>
      {searchList()}
      {isChartVisible ? (
        <Chart
          clickClose={closeChart}
          yData={[
            chartData?.numComics,
            chartData?.numSeries,
            chartData?.numStories,
            chartData?.numEvents,
          ]}
          chartTitle={chartData.name}
        />
      ) : null}
    </section>
  );
}

export default MarvelSearch;
