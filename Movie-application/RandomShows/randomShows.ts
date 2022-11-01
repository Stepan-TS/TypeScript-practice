class RandomShows {
    getRandomValue<T>(array: Array<T>) : T {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}

export default RandomShows