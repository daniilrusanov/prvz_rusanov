export class Student {
    name: string;
    averageScore: number;

    constructor(name: string, averageScore: number) {
        this.name = name;
        this.averageScore = averageScore;
    }

    calculateScholarship(): number {
        const baseScholarship = 3000;
        const bonusPerPoint = 1000;
        const scoreBonus = Math.max(Math.floor(this.averageScore) - 5, 0);
        return baseScholarship + (bonusPerPoint * scoreBonus);
    }
}
