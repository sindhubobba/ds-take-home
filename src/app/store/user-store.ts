import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { RegisteredUser, UnregisteredUser, ProjectMemberShip } from '../models/users';

export interface Users {
    registeredUsers: RegisteredUser[];
    unregisteredUsers: UnregisteredUser[];
}

const defaultState: Users = {
    registeredUsers: [],
    unregisteredUsers: []
};

@Injectable()
export class UserStore extends ComponentStore<Users>{

    constructor() {
        super(defaultState);
    }

    readonly addRegisteredUser = this.updater((state, users: RegisteredUser[]) => {
        state.registeredUsers = [...state.registeredUsers, ...users]
        return state;
    })

    readonly addUnregisteredUser = this.updater((state, users: UnregisteredUser[]) => {
        state.unregisteredUsers = [...state.unregisteredUsers, ...users]
        return state;
    })
    readonly addProjectMemberShips = this.updater((state, projectMemberships: ProjectMemberShip[]) => {
        let userProjectMap = projectMemberships.reduce((acc: any, currentValue) => {
            if (acc[currentValue.userId]) {
                acc[currentValue.userId].projectIds.push(currentValue.projectId)
            } else {
                acc[currentValue.userId] = { projectIds: [] };
                acc[currentValue.userId].projectIds = [currentValue.projectId];
            }
            return acc;
        }, {})
        state.registeredUsers.forEach(user => {
            if (userProjectMap[user.id]) {
                user.projectIds = userProjectMap[user.id].projectIds;
            }
        })
        state.unregisteredUsers.forEach(user => {
            if (userProjectMap[user.id]) {
                user.projectIds = userProjectMap[user.id].projectIds;
            }
        })
        return state;
    })

    readonly registeredUsers$ = this.select((state) => {
        return state.registeredUsers
    });

    readonly unregisteredUsers$ = this.select((state) => {
        return state.unregisteredUsers
    });
}
