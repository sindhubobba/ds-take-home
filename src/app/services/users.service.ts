import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {registeredUsers} from '../mockAPIs/mockRegisteredUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    return new Observable(subscriber => {
      subscriber.next(registeredUsers)
    })
    //return this.httpClient.get('https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers');
  }
}
