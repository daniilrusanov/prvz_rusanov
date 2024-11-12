import { Student } from './student';

export class Master extends Student {
    specialty: string;
    additionalScholarship: number;

    constructor(name: string, averageScore: number, specialty: string, additionalScholarship: number) {
        super(name, averageScore);
        this.specialty = specialty;
        this.additionalScholarship = additionalScholarship;
    }

    override calculateScholarship(): number {
        return super.calculateScholarship() + this.additionalScholarship;
    }
}