import { API_KEY } from '../../config/env';

const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-07&sortBy=publishedAt&apiKey=${API_KEY}`;

export async function getUSANews() {
    let result = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-09&sortBy=publishedAt&apiKey=7467b39f033842e5b17ea55858b2942c')
            .then(response => response.json());
    return result.articles;
}