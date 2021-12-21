import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnSiteTask } from '../models/task.model';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';

const baseUrl = 'https://localhost:7077/api/Tasks';


@Injectable({
    providedIn: 'root'
  })
  export class OnSiteTaskService {
  
    constructor(private http: HttpClient) { }
  
    // getAll(): Observable<OnSiteTask[]> {
    //   return this.http.get<OnSiteTask[]>(baseUrl);
    // }

    getAll(): Observable<ResponseMessage> {
        return this.http.get<ResponseMessage>(baseUrl);
      }
  
    get(id: any): Observable<OnSiteTask> {
      return this.http.get<OnSiteTask>(`${baseUrl}/${id}`);
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
  
    findByTitle(title: any): Observable<OnSiteTask[]> {
      return this.http.get<OnSiteTask[]>(`${baseUrl}?title=${title}`);
    }
  }