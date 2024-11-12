import { randomInt } from "./randomInt";

export class ArrayTwo {
    a: number[][] = [];
    res: number[][] = [];
    
    // Завдання
    /*  Дано дійсний масив розмірністю n * m, в якому не всі елементи дорівнюють
        нулю. Отримати новий масив шляхом ділення всіх елементів Даного масиву на
        його більший за модулем елемент. */

    constructor() {
        this.a = [];
    }

    genArray(n: number, m:number) {
        this.a = [];
        let rnd = new randomInt();

        for(let i = 0; i < n; i++) {
            this.a[i] = [];
            for (let j = 0; j < m; j++) {
                this.a[i][j] = rnd.randomInteger(-10, 10);
            } 
        }

        let max = this.findMax(this.a);

        for(let i = 0; i < n; i++) {
            this.res[i] = [];
            for (let j = 0; j < m; j++) {
                this.res[i][j] = this.a[i][j] / max;
            } 
        }
    }
    
    findMax(matrix: number[][]): number {
        let maxAbsValue = matrix[0][0];
        for (const row of matrix) {
            for (const number of row) {
                if (Math.abs(number) > Math.abs(maxAbsValue)) {
                    maxAbsValue = number;
                }
            }
        }
        return Math.abs(maxAbsValue);
    }
}