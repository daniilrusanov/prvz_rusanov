import { Component } from '@angular/core';
import { Student } from '../Class/student';
import { Master } from '../Class/master';

@Component({
  selector: 'app-student-section',
  standalone: true,
  imports: [],
  templateUrl: './student-section.component.html',
  styleUrl: './student-section.component.css'
})
export class StudentSectionComponent {
  resultStudentMessage: string = '';
  resultMasterMessage: string = '';

  // Метод для обчислення стипендії студента
  calculateStudentScholarship(): void {
    const name = (document.getElementById("studentName_bc")as HTMLInputElement).value;
    const averageScore = parseFloat((document.getElementById("averageScore_bc")as HTMLInputElement).value);
    const specialty = "Бакалавр";

    const student = new Student(name, averageScore);
    const scholarship = student.calculateScholarship();

    const resultElement = document.getElementById("result_bc") as HTMLElement;
    this.resultStudentMessage = 
      `${student.name} з середнім балом ${student.averageScore} та спеціальністю ${specialty} отримує стипендію: ${scholarship} грн`;
}

  // Метод для обчислення стипендії магістра
  calculateMasterScholarship(): void {
    const name = (document.getElementById("studentName")as HTMLInputElement).value;
    const averageScore = parseFloat((document.getElementById("averageScore")as HTMLInputElement).value);
    const specialty = (document.getElementById("masterSpecialty")as HTMLInputElement).value;
    const additionalScholarship = parseFloat((document.getElementById("additionalScholarship")as HTMLInputElement).value);

    const master = new Master(name, averageScore, specialty, additionalScholarship);
    const scholarship = master.calculateScholarship();

    const resultElement = document.getElementById("result") as HTMLElement;
    this.resultMasterMessage =
    `${master.name} з середнім балом ${master.averageScore} та спеціальністю ${master.specialty} отримує стипендію: ${scholarship} грн`;
  }
}

