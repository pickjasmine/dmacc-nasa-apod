import {NASA_API_KEY} from "./secrets";

const API_URL_BASE = "https://api.nasa.gov/planetary/apod";

export const getPictureOfTheDay = async () => {
    const apiUrl = `${API_URL_BASE}?api_key=${NASA_API_KEY}`;
    //// string templating

    const response = await fetch(apiUrl);

    console.log('response from NASA: ', response);

    if (response.status !== 200) {
        console.error('Error returned:', response);
        return null;
    }

    return response.json();
}

// example of using fetch without async/await - will not work but you kind of get the gist
// export const getPictureOfTheDay = () => {
//     const apiUrl = `${API_URL_BASE}?api_key=${NASA_API_KEY}`;
//     //// string templating
//
//     const apiUrl2 = API_URL_BASE + "?api_key=" + NASA_API_KEY;
//     // another way to string template but could lead to coercion
//     // issues if the variables are numbers
//
//
//     const response = fetch(apiUrl).then((response) => {
//         // do stuff here after fetch is finished
//     }).then();
//
//     console.log('response from NASA: ', response);
//
//     if (response.status !== 200) {
//         console.error('Error returned:', response);
//         return null;
//     }
//
//     return response.json();
// }