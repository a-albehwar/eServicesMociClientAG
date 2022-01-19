import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnSiteTask } from '../models/task.model';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';

// const baseUrl = 'https://localhost:7077/api/Tasks';
const baseUrl = 'http://40.123.228.222/eServicesMociTasks/api/Tasks';


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

    getMyTasks(userId:any): Observable<ResponseMessage> {
        return this.http.get<ResponseMessage>(`${baseUrl}/getMyTasks/${userId}`);
      }

    get(id: any): Observable<ResponseMessage> {
      return this.http.get<ResponseMessage>(`${baseUrl}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
  
    update(id: any, data: any): Observable<any> {
      // return this.http.put(`${baseUrl}/${id}`, data);
      return this.http.put(`${baseUrl}`, data);
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