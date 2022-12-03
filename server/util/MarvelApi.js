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
    console.error(res.status)
    throw new Error("ERROR: " + res.status);
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

// Returns an array of all marvel characters from the API
async function getAllCharacterData() {
  const characters = [];

  const dataSets = await Promise.all(
    [...Array(Config.NUM_OF_OFFSETS_CHARS)].map((_, index) =>
      getCharacters(index * 100)
    )
  );
  dataSets.forEach((data) => {
    const charData = [...data].map(
      ({ id, name, thumbnail, comics, series, stories, events }) => {
        const { available: numComics } = comics;
        const { available: numSeries } = series;
        const { available: numStories } = stories;
        const { available: numEvents } = events;
        return {
          id,
          name,
          thumbnail,
          numComics,
          numSeries,
          numStories,
          numEvents,
        };
      }
    );
    characters.push(...charData);
  });

  const returnedChars = await Promise.all(characters);

  return returnedChars;
}

(async () => {
  const data = await getAllCharacterData();
  console.log(data)
})();

// Generates a timestamp and hash
function generateAuthParams() {
  const ts = Date.now();
  const hash = MD5(ts + Config.PRIVATE_KEY + Config.PUBLIC_KEY).toString();
  return { ts, hash };
}


(async ()=>{
  let data = await getAllCharacterData();
  console.log(data);
})()

module.exports = getAllCharacterData;

