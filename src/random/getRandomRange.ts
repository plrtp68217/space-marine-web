export const getRandomRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}