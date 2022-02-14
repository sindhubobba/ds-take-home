
import { UserStore } from './user-store';

describe('UserStore', () => {
  const regisUser = [{
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
    "emailAddress": "last1@mail.com",
    "projectIds": []
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
  it('should create an instance', () => {
    expect(new UserStore()).toBeTruthy();
  });

  it('should add registered users to the store',() => {
    const userStore = new UserStore();
    userStore.addRegisteredUser(regisUser)
    userStore.state$.subscribe((state) => {
      expect(state.registeredUsers.length).toEqual(1);
    })
  });

  it('should add projectId\'s to users',() =>{
    const userStore = new UserStore();
    userStore.setState({
      registeredUsers: regisUser,
      unregisteredUsers: []
    })
    userStore.addProjectMemberShips(mockProjectMembershipResponse);
    userStore.state$.subscribe((state) => {
      expect(state.registeredUsers[0].projectIds.length).toEqual(2);
    }).unsubscribe();
  })
});
