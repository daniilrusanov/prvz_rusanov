import { randomInt } from "./randomInt";
export class ArrayOne {
    a: number[] = [];
    sum: number = 0;

    // Завдання
    /*  Знайти суму всіх елементів масиву дійсних чисел, більших за дане число.
        Розмірність масиву - 20. Заповнення масиву здійснити випадковими числами
        від 50 до 100. */

    constructor() {
        this.a = [];
    }

    genArray(n: number) {
        this.a = [];
        let rnd = new randomInt();
        for (let i = 0; i < 20; i++) {
            this.a.push(rnd.randomInteger(50, 100));
            if (this.a[i] > n) this.sum += this.a[i];
        }
    }
}