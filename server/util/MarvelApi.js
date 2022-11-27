const Config = require('./config.js');
const MD5 = require('crypto-js/md5.js');

async function getJSON(url) {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error('ERROR: (${res.status})');
  }
  return data;
}

// Gets an array of characters based on the result limit
async function getCharacters(offset) {
  const url = new URL(Config.API_URL + Config.CHARACTERS_PATH);
  const { ts, hash } = generateAuthParams();
  url.search = new URLSearchParams({
    offset,
    limit: Config.RESULT_LIMIT,
    ts,
    hash,
    apikey: Config.PUBLIC_KEY,
  });
  const { data } = await getJSON(url);
  const { results } = data;
  return results;
}

// Gets an array of series
async function getSeries(offset) {
  const url = new URL(Config.API_URL + Config.SERIES_PATH);
  const { ts, hash } = generateAuthParams();
  url.search = new URLSearchParams({
    offset,
    limit: Config.RESULT_LIMIT,
    ts,
    hash,
    apikey: Config.PUBLIC_KEY,
  });
  const { data } = await getJSON(url);
  const { results } = data;
  return results;
}

// Returns an array of all marvel characters from the API
async function getAllCharacterData() {
  const characters = [];

  const dataSets = await Promise.all(
    [...Array(1)].map((_, index) => getCharacters(index * 100))
  );
  dataSets.forEach((data) => {
    const charData = [...data].map(async ({ id, name, thumbnail, series }) => {
      return {
        id,
        name,
        thumbnail,
        allSeries: await getAvailableSeries(series),
      };
    });
    characters.push(...charData);
  });

  
  const returnedChars = await Promise.all(characters)

  // Filter out characters that have no series
  return returnedChars.filter(char => char.allSeries.length > 0);
}

// Returns an array of all marvel series from the API
async function getAllSeriesData() {
  const series = [];

  const dataSets = await Promise.all(
    [...Array(Config.NUM_OF_OFFSETS_SERIES)].map((_, index) =>
      getSeries(index * 100)
    )
  );
  dataSets.forEach((data) => {
    const charData = [...data].map(({ id, title, startYear, endYear }) => {
      return { id, title, startYear, endYear };
    });
    series.push(...charData);
  });

  return series;
}

// Gets all available series for a character
async function getAvailableSeries(series) {
  const url = new URL(series.collectionURI);
  const { ts, hash } = generateAuthParams();
  url.search = new URLSearchParams({
    ts,
    hash,
    limit: Config.RESULT_LIMIT,
    apikey: Config.PUBLIC_KEY,
  });

  const { data } = await getJSON(url);
  return data.results.map(({ id, title }) => {
    return { id, title };
  });
}

// Generates a timestamp and hash
function generateAuthParams() {
  const ts = Date.now();
  const hash = MD5(ts + Config.PRIVATE_KEY + Config.PUBLIC_KEY).toString();
  return { ts, hash };
}

module.exports = {getAllCharacterData, getAllSeriesData};
