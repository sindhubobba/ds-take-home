import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { registeredUsers } from '../mockAPIs/mockRegisteredUsers';
import { unregisteredUsers } from '../mockAPIs/mockUnregisteredUsers';
import { projectMemberShips } from '../mockAPIs/mockProjectMembership';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    const regisUsers = this.httpClient.get(environment.registeredUserURL);
    const unregisUsers = this.httpClient.get(environment.unregisteredURL);
    const projectMemberships = this.httpClient.get(environment.projectMembershipURL);
    return forkJoin([regisUsers,unregisUsers,projectMemberships])
    .pipe(catchError(err => of([])));
  }
}
