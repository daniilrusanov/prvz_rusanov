import { Component } from '@angular/core';
import { ArrayTwo } from '../Class/arrayTwo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  arrayTwo: ArrayTwo = new ArrayTwo();

  calculate(N: string, M: string) {
    if(N && M) {
      let n = parseInt(N);
      let m = parseInt(M);
  
      this.arrayTwo.genArray(n, m);
    }
    }
}
