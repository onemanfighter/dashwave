export type UserData = {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
};

export type AuthData = {
    authToken: string;
    userData: UserData;
};
