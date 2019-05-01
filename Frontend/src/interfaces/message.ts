export interface Message {
    id: number,
    sender: User,
    date: Date,
    content: string,
    platform: Platform
    likeAmount: number
}

export interface User {
    id: number,
    name: string,
    email: string,
    dateOfBirth: Date
}

export enum Platform {
    FACEBOOK, TWITTER, LINKEDIN, INSTAGRAM, ISMO
}

export const PlatformName = {
    0: "Facebook",
    1: "Twitter",
    2: "LinkedIn",
    3: "Instagram",
    4: "ISMO"
}