require('dotenv').config();

const API_URL = 'https://gateway.marvel.com/';
const CHARACTERS_PATH = 'v1/public/characters';
const SERIES_PATH = 'v1/public/series';
const NUM_OF_OFFSETS_CHARS = 16;
const NUM_OF_OFFSETS_SERIES = 133;
const RESULT_LIMIT = 100;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

module.exports = {
  API_URL,
  CHARACTERS_PATH,
  SERIES_PATH,
  NUM_OF_OFFSETS_CHARS,
  NUM_OF_OFFSETS_SERIES,
  RESULT_LIMIT,
  PRIVATE_KEY,
  PUBLIC_KEY
}