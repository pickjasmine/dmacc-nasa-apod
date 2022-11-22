import {NASA_API_KEY} from "./secrets";

const API_URL_BASE = "https://api.nasa.gov/planetary/apod";

export const getPictureOfTheDay = async () => {
    const apiUrl = `${API_URL_BASE}?api_key=${NASA_API_KEY}`;
    const response = await fetch(apiUrl);

    console.log('response from NASA: ', response);

    if (response.status !== 200) {
        console.error('Error returned:', response);
        return null;
    }

    return response.json();
}