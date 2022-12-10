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
  {
    id: 1011456,
    name: 'Balder',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/4ce5a7c2814ba',
      extension: 'gif',
    },
    numComics: 98,
    numSeries: 28,
    numStories: 123,
    numEvents: 3,
  },
  {
    id: 1009168,
    name: 'Banshee',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/03/52740e4619f54',
      extension: 'jpg',
    },
    numComics: 181,
    numSeries: 53,
    numStories: 205,
    numEvents: 10,
  },
  {
    id: 1009596,
    name: 'Banshee (Theresa Rourke)',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4ce5a1a50e56b',
      extension: 'jpg',
    },
    numComics: 155,
    numSeries: 31,
    numStories: 178,
    numEvents: 6,
  },
  {
    id: 1011778,
    name: 'Baron Mordo (Karl Mordo)',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/90/4ce5a86dba8a8',
      extension: 'jpg',
    },
    numComics: 17,
    numSeries: 9,
    numStories: 21,
    numEvents: 1,
  },
  {
    id: 1009169,
    name: 'Baron Strucker',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/80/4c0041fb5a90d',
      extension: 'jpg',
    },
    numComics: 44,
    numSeries: 19,
    numStories: 52,
    numEvents: 1,
  },
  {
    id: 1009170,
    name: 'Baron Zemo (Heinrich Zemo)',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c0041f84c9fe',
      extension: 'jpg',
    },
    numComics: 37,
    numSeries: 23,
    numStories: 40,
    numEvents: 1,
  },
  {
    id: 1010906,
    name: 'Baron Zemo (Helmut Zemo)',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/4c0035890fb0a',
      extension: 'jpg',
    },
    numComics: 33,
    numSeries: 17,
    numStories: 35,
    numEvents: 0,
  },
  {
    id: 1011137,
    name: "Baroness S'Bak",
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    numComics: 1,
    numSeries: 1,
    numStories: 1,
    numEvents: 1,
  },
  {
    id: 1011354,
    name: 'Barracuda',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    numComics: 4,
    numSeries: 3,
    numStories: 5,
    numEvents: 0,
  },
  {
    id: 1009550,
    name: 'Bart Rozum',
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
    id: 1009171,
    name: 'Bastion',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/80/52695253215f4',
      extension: 'jpg',
    },
    numComics: 37,
    numSeries: 20,
    numStories: 37,
    numEvents: 2,
  },
  {
    id: 1009172,
    name: 'Batroc the Leaper',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4ce59eb840da5',
      extension: 'gif',
    },
    numComics: 31,
    numSeries: 16,
    numStories: 37,
    numEvents: 0,
  },
  {
    id: 1009173,
    name: 'Battering Ram',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708',
      extension: 'gif',
    },
    numComics: 2,
    numSeries: 2,
    numStories: 2,
    numEvents: 0,
  },
  {
    id: 1011785,
    name: 'Battlestar',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    numComics: 9,
    numSeries: 4,
    numStories: 16,
    numEvents: 1,
  },
  {
    id: 1009174,
    name: 'Beak',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c0040b8329ad',
      extension: 'jpg',
    },
    numComics: 17,
    numSeries: 5,
    numStories: 18,
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
        <form onSubmit={searchCharacters} className="mt3">
          <input
            className="pa3 bb br3 grow b--none bg-light-red mb3 mr3"
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
