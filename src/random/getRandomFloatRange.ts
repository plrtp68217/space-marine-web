export const getRandomFloatRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}