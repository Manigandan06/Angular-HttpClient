import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOneStudentComponent } from './view-one-student/view-one-student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path: 'allstudent', component: AllStudentComponent},
  {path: 'addstudent', component: AddStudentComponent},
  {path: 'studview/:sid', component:ViewOneStudentComponent},
  {path: 'studedit/:sid', component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
