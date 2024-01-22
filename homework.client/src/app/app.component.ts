import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //use each field instead a person object for easier debug
  public firstName: string = 'first';
  public lastName: string = 'last';
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  
  submit() {
    let person: Person = { firstName: this.firstName, lastName: this.lastName };
        
    this.http.post<any>('/person', person).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
    
  }

  title = 'homework.client';
}
