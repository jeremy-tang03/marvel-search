require('dotenv').config();

const API_URL = 'https://gateway.marvel.com/';
const CHARACTERS_PATH = 'v1/public/characters';
const NUM_OF_OFFSETS_CHARS = 16;
const RESULT_LIMIT = 100;
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY

module.exports = {
  API_URL,
  CHARACTERS_PATH,
  NUM_OF_OFFSETS_CHARS,
  RESULT_LIMIT,
  PRIVATE_KEY,
  PUBLIC_KEY
}