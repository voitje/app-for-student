import { API_KEY } from '../../config/env';

const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-07&sortBy=publishedAt&apiKey=${API_KEY}`;

export async function getUSANews() {
    // let result = await fetch(url).then((response = response.json()));
    let result = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-07&sortBy=publishedAt&apiKey=e279118d62d34db5b8eb22922bfb1a05')
            .then(response => response.json());

    return result.articles;
}