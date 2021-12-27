import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';

const baseUrl = 'http://localhost:5240';


@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    constructor(private http: HttpClient) { }
  
    // getAll(): Observable<OnSiteTask[]> {
    //   return this.http.get<OnSiteTask[]>(baseUrl);
    // }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(baseUrl+"/ListUsers");
      }
  
    get(id: any): Observable<User> {
      return this.http.get<User>(`${baseUrl}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
  
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
  
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
  
    findByTitle(title: any): Observable<User[]> {
      return this.http.get<User[]>(`${baseUrl}?title=${title}`);
    }
  }