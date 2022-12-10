import type Emoji from "./Emoji";

export default interface Entry {
    id: number; // number of users id
    body: string; // this one will be used to store the text 
    emoji: Emoji | null; // the emojis will be used to react
    createdAt: Date; // In the real application this Date needs to be stored in the backend
    userId: number; // The user need to have an Id
}