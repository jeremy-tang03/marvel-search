const Config = require('./config.js');
const MD5 = require('crypto-js/md5.js')

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
  
  async function getCharacters(offset) {
    const url = new URL(Config.API_URL + Config.CHARACTERS_PATH);
    const { ts, hash } = generateAuthParams();
    url.search = new URLSearchParams({
      offset,
      limit: 100,
      ts,
      hash,
      apikey: Config.PUBLIC_KEY,
    });
    const { data } = await getJSON(url);
    const { results } = data;
    return results;
  }
  
  async function getAllCharacterData() {
    const characters = [];
    const dataSets = await Promise.all(
      [...Array(Config.NUM_OF_OFFSETS)].map((_, index) => getCharacters(index * 100))
    );
    dataSets.forEach((data) => {
      const charData = [...data].map(({ id, name, thumbnail, comics }) => {
        return { id, name, thumbnail, comics };
      });
      characters.push(...charData);
    });
    return characters.filter(char => char.comics.available > 0);
  }
  
  function generateAuthParams() {
    const ts = Date.now();
    const hash = MD5(ts + Config.PRIVATE_KEY + Config.PUBLIC_KEY).toString();
    return { ts, hash };
  }
  

module.exports = getAllCharacterData;
