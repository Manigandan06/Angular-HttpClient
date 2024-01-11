import { Router } from '@angular/router';
import { Stud } from '../stud';
import { HttpClientService } from './../http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
  constructor(private httpClientService: HttpClientService, private router: Router) {}
  allStudents: Stud[] = []
  loadData(){
    this.httpClientService.getAllStudent().subscribe({
      next: (response) => {this.allStudents = response},
      error(err) {
          console.log(err)
      },
    })
  }
  ngOnInit() {
      this.loadData()
  }

  viewStudent(sid: any){
    this.router.navigate(['studview',sid])
  }

  delete(sid: number){
    this.httpClientService.deleteStudent(sid).subscribe({
      next:(response) => {
        this.loadData()
      },
      error:err=>{console.log(err)}
    })
  }
  addStudent(){
    this.router.navigate(['addstudent'])
  }

  editStudent(sid: number){
    this.router.navigate(['studedit',sid])
  }
}
