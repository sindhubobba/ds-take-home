import { Component, HostListener, OnInit } from '@angular/core';
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
  regDisplayedColumns: string[] = ['firstName','lastName','company','organizationType','phone','city', 'projectIds'];
  regHeaders = ['First name','Last name','Company','Organization type','Phone','City','ProjectId\'s']
  unregDisplayedColumns: string[] = ['emailAddress','projectIds'];
  unregHeaders = ['Emailaddress','ProjectId\'s'];
  isMobileView = false;

  constructor(private userService: UserService, private userStore: UserStore) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(([regUsers, unregUsers, memberships]) => {
      this.userStore.addRegisteredUser(regUsers);
      this.userStore.addUnregisteredUser(unregUsers);
      this.userStore.addProjectMemberShips(memberships)
    })
    this.isMobileView =  this.isSmall();
  }

  get registeredUsers$() {
    return this.userStore.registeredUsers$;
  }

  get unregisteredUsers$() {
    return this.userStore.unregisteredUsers$;
  }

  @HostListener("window:resize", [])
  onResize(){
    this.isMobileView = this.isSmall();
  }

  isSmall(){
    return window.innerWidth < 768 ? true : false;
  }
}