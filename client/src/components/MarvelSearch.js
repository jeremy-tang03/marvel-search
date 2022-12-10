import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import Chart from './Chart';

function MarvelSearch() {
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [chartData, setChartData] = useState({});

  async function getJSON(url) {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`Error: (${res.status})`);
    }
    const data = await res.json();
    return data;
  }

  async function searchCharacters(e) {
    e.preventDefault();
    try {
      const query = e.target.search.value;

      if (query === '') return;

      const queriedChars = await getJSON(`/api/search/${query}`);

      setSearchedCharacters(queriedChars);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function showChart(e) {
    if (isChartVisible) return;

    const charId = e.target.closest('.character-card').dataset.id;
    const [selectedChar] = await getJSON(`/api/get/${charId}`);
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
