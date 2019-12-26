import { API_KEY } from '../../config/env';

const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-07&sortBy=publishedAt&apiKey=${API_KEY}`;

export async function getUSANews() {
<<<<<<< HEAD
    // let result = await fetch(url).then((response = response.json()));
    let result = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-20&sortBy=publishedAt&apiKey=ef27a905965642a382591dc2bc9f0019')
            .then(response => response.json());
    console.log(result)
=======
    let result = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-09&sortBy=publishedAt&apiKey=7467b39f033842e5b17ea55858b2942c')
            .then(response => response.json());
>>>>>>> 87b2b01e58dad0a5bf1079d8943288fdafa00162
    return result.articles;
}