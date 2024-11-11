import { TaskSectionComponent } from './task-section/task-section.component';
import { StudentSectionComponent } from './student-section/student-section.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskSectionComponent, StudentSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lr9';
}
