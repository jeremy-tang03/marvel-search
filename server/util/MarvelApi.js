import { config } from "dotenv";

const PRIVATE_KEY = config.env.MARVEL_PRIVATE_KEY;
const PUBLIC_KEY = config.env.MARVEL_PUBLIC_KEY;

function fetchMarvelDAta() {

    // you need a new ts every request                                                                                    
    let ts = new Date().getTime();
    let hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    const marvelURL = "https://gateway.marvel.com/v1/public/";

};

getMarvelResponse();