import { config } from "dotenv";

// add your api keys to config.env
const PRIVATE_KEY = config.env.MARVEL_PRIVATE_KEY;
const PUBLIC_KEY = config.env.MARVEL_PUBLIC_KEY;

async function fetchMarvelData() {

    // ts, used to create different hash every time                                                                               
    let ts = new Date().getTime();
    let hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();


    // todo install coors??
    const marvelURL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
    try {
        const data = await fetch(marvelURL);
        const jsonData = await data.json()
        return jsonData;
    }

    catch(err) {
        console.error("Error fetching marvel api " + err)
        throw err;
    }

};

module.exports = fetchMarvelData;