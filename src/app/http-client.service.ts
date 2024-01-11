import { Stud } from './stud';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }
  
  baseurl = 'http://localhost:3000/Student'

  getAllStudent(): Observable<Stud[]>{
    return this.http.get<Stud[]>(this.baseurl);
  }


  getAStudent(sid: any): Observable<Stud>{
    return this.http.get<Stud>(this.baseurl +'/'+ sid)
  }

  addStud(myform: any): Observable<Stud>{
    return this.http.post<Stud>(this.baseurl,myform)
  }

  
  deleteStudent(sid: number): Observable<void>{
     return this.http.delete<void>(this.baseurl + '/' + sid);
  }

  updateStudent(student: Stud): Observable<Stud>{
    return this.http.put<Stud>(this.baseurl+'/'+student.id,student)
  }

}
