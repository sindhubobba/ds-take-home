export type RegisteredUser = {
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
    emailAddress: string,
    projectIds: Array<string>
}

export type UnregisteredUser = {
    id: string,
    emailAddress: string,
    languageCode: string,
    registrationId: string,
    registrationIdGeneratedTime: string,
    projectIds: Array<string>
}

export type ProjectMemberShip = {
    id: string,
    projectId: string,
    userId: string
}