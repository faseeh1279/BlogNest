import conf from "../conf/config";
import { Client, Databases, Account, ID  } from "appwrite";
// why config because react is a front end library if we write these in the components directly that is going to be a huge issue in the future. That's why we make a config service to make everything crystal clear. 

export class AuthService {
    client = new Client() 
    account; 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId); 
        this.account = new Account(this.client); 
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name); 
            if(userAccount){
                // Call another method 
                return this.login({email, password});
            }
            else{
                return userAccount; 
            }
        } catch (error) {
            throw error; 
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)            
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get() 
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error); 
        }
        return null; 
    }
    async logout() {
        try {
            await this.account.deleteSessions(); 
        } catch (error) {
            console.log("Appwrite service :: Logout :: error", error);
            
        }
    }
} 

const authService = new AuthService(); 

export default authService


// now we have created a class in which we have defined some of the credentials 
// if a programmer wants to fetch something from the auth service he directly get it using the object of the authservice class. This is optimized coding. 