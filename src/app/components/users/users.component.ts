import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { UserStore } from 'src/app/store/user-store';

@Component({
  selector: 'ds-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserStore]
})
export class UsersComponent implements OnInit {
  registeredUsers$: Array<any> = [];

  constructor(private userService: UserService, private userStore: UserStore) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.userStore.addUser(users)
    });
  }

  get users$(){
    return this.userStore.registeredUsers$;
  }
}