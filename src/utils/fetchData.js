//import axios from "axios";
export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "af3dc4089dmsh3b750d33a48c4b7p1ae26ajsn788909559381",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};
