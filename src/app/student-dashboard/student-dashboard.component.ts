import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Student } from './Student.module';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  formValue ! :FormGroup;
  studentObj:Student=new Student();
  studentData ! : any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  constructor( private fb:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
     this.formValue=this.fb.group({
      firstName:[''],
       lastName:[''],
       email:[''],
       mobileNo:['']
     });

     this.getAllStudent();
  }

  clickAddStudent()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  postStudentDetails()
  {
    this.studentObj.firstName = this.formValue.value.firstName;
    this.studentObj.lastName = this.formValue.value.lastName;
    this.studentObj.email = this.formValue.value.email;
    this.studentObj.mobileNo = this.formValue.value.mobileNo;

    this.api.postStudent(this.studentObj)
    .subscribe(res =>{
      console.log(res);
      alert("Student Added Successfully");
      let ref=document.getElementById('cancel');
      ref?.click();

      this.formValue.reset();
      this.getAllStudent();
    },
    error=>{
      alert("Something went wrong");
    })
  }

  getAllStudent()
  {
    this.api.getStudent().subscribe(res=>{
      this.studentData = res;
    })
  }

deleteStudent(row:any)
{
  this.api.deleteStudent(row.id).subscribe(res=>{
    alert("Student Deleted");
    this.getAllStudent();
  })
}


  onEdit(row:any)
  {
    this.showAdd = false;
    this.showUpdate = true;
    this.studentObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobileNo'].setValue(row.mobileNo);
  }

  updateStudentDetails()
  {
    this.studentObj.firstName=this.formValue.value.firstName;
    this.studentObj.lastName=this.formValue.value.lastName;
    this.studentObj.email=this.formValue.value.email;
    this.studentObj.mobileNo=this.formValue.value.mobileNo;

    this.api.updateStudent(this.studentObj,this.studentObj.id).subscribe(res=>{
      alert("Updated Successfuly");
      this.formValue.reset();
      let ref=document.getElementById('cancel');
      ref?.click();
      this.getAllStudent();

      

    })

  }

}
