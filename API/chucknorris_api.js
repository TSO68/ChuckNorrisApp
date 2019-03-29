export function getRandomJoke () {
    const url = 'https://api.chucknorris.io/jokes/random';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}