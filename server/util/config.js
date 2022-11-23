require('dotenv').config();

const API_URL = 'https://gateway.marvel.com/';
const CHARACTERS_PATH = 'v1/public/characters';
const COMICS_PATH = 'v1/public/comics';
const NUM_OF_OFFSETS = 16;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

module.exports = {
  API_URL,
  CHARACTERS_PATH,
  COMICS_PATH,
  NUM_OF_OFFSETS,
  PRIVATE_KEY,
  PUBLIC_KEY
}