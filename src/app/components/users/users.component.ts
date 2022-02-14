import { Component, OnInit } from '@angular/core';
import { projectMemberShips } from 'src/app/mockAPIs/mockProjectMembership';
import { UserService } from 'src/app/services/users.service';
import { UserStore } from 'src/app/store/user-store';

@Component({
  selector: 'ds-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserStore]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private userStore: UserStore) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(([regUsers, unregUsers, memberships]) => {
      this.userStore.addRegisteredUser(regUsers);
      this.userStore.addUnregisteredUser(unregUsers);
      this.userStore.addProjectMemberShips(memberships)
    })
  }

  get registeredUsers$() {
    return this.userStore.registeredUsers$;
  }

  get unregisteredUsers$() {
    return this.userStore.unregisteredUsers$;
  }
}