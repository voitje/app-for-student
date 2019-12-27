import { API_KEY } from '../../config/env';

const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-07&sortBy=publishedAt&apiKey=${API_KEY}`;

export async function getUSANews() {
    // let result = await fetch(url).then((response = response.json()));
    let result=[];
    await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-27&sortBy=publishedAt&apiKey=ef27a905965642a382591dc2bc9f0019')
        .then((response)=>response.json())
        .then((response)=>result=response);
    return result.articles;
}