import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { ViewOneStudentComponent } from './view-one-student/view-one-student.component';
import { HttpClientService } from './http-client.service';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AllStudentComponent,
    ViewOneStudentComponent,
    HeaderComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
