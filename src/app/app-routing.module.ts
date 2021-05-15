
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


const routes:Routes =[
];
 

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{ }


/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {ViewStudentComponent} from './view-student/view-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';

const routes: Routes = [
  {path:"add-student", component:AddStudentComponent},
  {path:"view-student", component:ViewStudentComponent},
  {path:"update-student", component:UpdateStudentComponent},

  { path: '', redirectTo: '/add-student', pathMatch: 'full' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/