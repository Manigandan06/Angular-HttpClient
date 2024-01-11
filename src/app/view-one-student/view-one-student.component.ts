import { HttpClientService } from './../http-client.service';
import { Component, OnInit } from '@angular/core';
import { Stud } from '../stud';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-one-student',
  templateUrl: './view-one-student.component.html',
  styleUrls: ['./view-one-student.component.css']
})
export class ViewOneStudentComponent implements OnInit{
  fetchedStudent: Stud={
    id:0,
    name:'',
    address:'',
    gender:'',
    phoneno:0,
  }

  constructor(private activatedRoute: ActivatedRoute,
              private  httpClientService: HttpClientService,
              private router:Router){}


  ngOnInit(): void {
    let studId = this.activatedRoute.snapshot.paramMap.get('sid')
    if(studId != null)
      this.httpClientService.getAStudent(studId).subscribe({
        next: (response) => {this.fetchedStudent = response},
        error:(err)=>console.log(err)
      })
  }
  back(){
    this.router.navigate(['allstudent'])
  }
}
