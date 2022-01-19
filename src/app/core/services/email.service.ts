import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// const baseUrl = 'https://localhost:7077/api/Tasks';
const baseUrl = 'http://40.123.228.222/eServicesMociTasks/api/Tasks';

@Injectable({
    providedIn: 'root'
  })
  export class EmailService {
  
    constructor(private http: HttpClient) { }
  
    sendemail(data: any): Observable<any> {
      return this.http.post(`${baseUrl}/SendEmail`, data);
    }
  
    
  }