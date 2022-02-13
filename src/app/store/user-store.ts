import { stagger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

type RegisteredUser = {
    id: string;
    city: string;
    company: string;
    country: string,
    firstName: string,
    lastName: string,
    organizationType: string,
    phone: string,
    state: string,
    zipCode: string,
    disclaimerAccepted: boolean,
    languageCode: string,
    emailAddress: string
}

export interface Users {
    registeredUsers: RegisteredUser[];
}

const defaultState: Users = {
    registeredUsers: [],
  };

@Injectable()
export class UserStore extends ComponentStore<Users>{

    constructor() {
        super(defaultState);
    }

    readonly addUser = this.updater((state, users: RegisteredUser[]) => {
        state.registeredUsers = [...state.registeredUsers, ...users]
        return state;
    })

    readonly registeredUsers$ = this.select((state) => {
        return state.registeredUsers
    });
}
