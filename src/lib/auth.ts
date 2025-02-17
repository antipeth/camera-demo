import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
//import pkg from "pg"
//const {Pool} = pkg;
export const auth = betterAuth({
    // database: new Pool({
    //     connectionString: "postgres://test:test@localhost:5432/test"
    // }),
    database: new Database("database.sqlite"),
    emailAndPassword: {  
        enabled: true,
        autoSignIn: false //defaults to true
    },
    socialProviders: { 
       github: { 
        clientId: import.meta.env.GITHUB_CLIENT_ID!, 
        clientSecret: import.meta.env.GITHUB_CLIENT_SECRET!, 
       } 
    }, 
})