export interface AppUser {
    username: string;
    name: string;
    authorities: Authority[]
}


export interface Authority {
    authority: string;
}