require('dotenv').config();

const API_URL = 'https://gateway.marvel.com/';
const CHARACTERS_PATH = 'v1/public/characters';
const SERIES_PATH = 'v1/public/series';
const NUM_OF_OFFSETS_CHARS = 16;
const NUM_OF_OFFSETS_SERIES = 133;
const RESULT_LIMIT = 100;
const PRIVATE_KEY = "3f102f3bd82d7182d3489e6ca3456229";
const PUBLIC_KEY = "93b98030a002d092a16ab14431d1d06015652836";

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