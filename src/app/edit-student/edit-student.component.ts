import { HttpClientService } from './../http-client.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Stud } from '../stud';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private httpClientService: HttpClientService,private router:Router) {}
  fetchedStudent: Stud={
    id:0,
    name:'',
    address:'',
    gender:'',
    phoneno:0,
  }

  myReactiveForm: FormGroup = new FormGroup({
    rid: new FormControl('0'),
    rName: new FormControl(),
    rAddress: new FormControl(),
    rGender: new FormControl(),
    rPhone: new FormControl(),
  })

  ngOnInit(): void{
   let studId:any = this.activatedRoute.snapshot.paramMap.get('sid')
   if(studId != null)
    this.httpClientService.getAStudent(studId).subscribe({
  next:(res) => {this.fetchedStudent = res,
  this.myReactiveForm.setValue({
    rid: this.fetchedStudent.id,
    rName: this.fetchedStudent.name,
    rAddress: this.fetchedStudent.address,
    rGender: this.fetchedStudent.gender,
    rPhone: this.fetchedStudent.phoneno,
  })},
  error:err=> console.log(err)
  })
}

editStudent(){
  console.log(this.myReactiveForm)
  let updateStud: Stud = {
    id: this.myReactiveForm.value.rid,
    name: this.myReactiveForm.value.rName,
    address: this.myReactiveForm.value.rAddress,
    gender: this.myReactiveForm.value.rGender,
    phoneno: this.myReactiveForm.value.rPhone
  }

  this.httpClientService.updateStudent(updateStud).subscribe({
    next:(res) => this.router.navigate(['allstudent']),
    error:err => console.log(err)
  })
}

}
