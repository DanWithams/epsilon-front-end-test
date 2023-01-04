export class Random {
    static integer (min, max) {
        return Math.random() * (max - min) + min;
    }
}
