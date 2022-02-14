import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserService } from './users.service';
import {environment} from '../../environments/environment'

describe('UsersService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const mockRegisUserResponse = [{    
      "id": "1",
      "city": "Jaydashire",
      "company": "Goyette - Renner",
      "country": "South Africa",
      "firstName": "firstName 1",
      "lastName": "lastName 1",
      "organizationType": "organizationType 1",
      "phone": "524.276.1570 x487",
      "state": "SD",
      "zipCode": "68048",
      "disclaimerAccepted": false,
      "languageCode": "en",
      "emailAddress": "last1@mail.com"    
  }];
  const mockUnregisUserResponse = [{
    "id": "21",
    "emailAddress": "email1@somewhere.com",
    "languageCode": "en",
    "registrationId": "jwsMJNOk3oM3hVM5bGcF1",
    "registrationIdGeneratedTime": "156165026851"
  }];
  const mockProjectMembershipResponse = [{
    "id": "1",
    "projectId": "1",
    "userId": "1"
  },
  {
    "id": "2",
    "projectId": "2",
    "userId": "1"
  }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get expected project memberships', () => {
    service.getUsers().subscribe(res =>{
      expect(res).toEqual([mockRegisUserResponse,mockUnregisUserResponse,mockProjectMembershipResponse])
    })
    const req = httpTestingController.expectOne(environment.projectMembershipURL);
    expect(req.request.method).toEqual('GET');
    const req1 = httpTestingController.expectOne(environment.registeredUserURL);
    expect(req1.request.method).toEqual('GET');
    const req2 = httpTestingController.expectOne(environment.unregisteredURL);
    expect(req2.request.method).toEqual('GET');
    req.flush(mockProjectMembershipResponse);
    httpTestingController.verify();
  })
});
