import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { StudentSectionComponent } from './student-section/student-section.component';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';

export const routes: Routes = [
    { path: 'student-section', component: StudentSectionComponent },
    { path: 'array-one', component: ArrayOneComponent },
    { path: 'array-two', component: ArrayTwoComponent }
];
