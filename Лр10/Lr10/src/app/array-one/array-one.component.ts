import { Component } from '@angular/core';
import { ArrayOne } from '../Class/arrayOne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();
  calculate(N: string) {
    if(N) {
      let n = parseInt(N);
      if(n > 49 && n < 101) {
        this.arrayOne.genArray(n);
      }
    }
  }
}
