export function getRandomJoke () {
    const url = 'https://api.chucknorris.io/jokes/random';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}

export function getCategory () {
    const url = 'https://api.chucknorris.io/jokes/categories';
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}

export function getJokeByCategory (category) {
    const url = 'https://api.chucknorris.io/jokes/random?category=' + category;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}