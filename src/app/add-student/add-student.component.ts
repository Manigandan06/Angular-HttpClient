import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Router } from '@angular/router';
import { Stud } from '../stud';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private httpClient: HttpClientService, private router:Router) {}
    addStudentDetail(myform:any){
      let studform:Stud = {
        id:0,
        name:myform.value.name,
        address:myform.value.address,
        gender:myform.value.gender,
        phoneno:myform.value.phone,
      }

      this.httpClient.addStud(studform).subscribe({
        next:response => this.router.navigate(['allstudent']),
        error: err => console.log(err)
      })
    }
}
