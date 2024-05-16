import { Client, Databases } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66454b4e00045e748ba0');