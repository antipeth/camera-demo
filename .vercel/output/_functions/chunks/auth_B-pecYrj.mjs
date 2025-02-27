import { betterAuth } from 'better-auth';
import Database from 'better-sqlite3';
import pkg from 'pg';

const { Pool } = pkg;
let database;
{
  database = new Database("database.sqlite");
}
const auth = betterAuth({
  database,
  emailAndPassword: {
    enabled: true,
    autoSignIn: false
    //defaults to true
  },
  socialProviders: {
    github: {
      clientId: "Ov23liZONX9cEj65x3H4",
      clientSecret: "6ec135e6bafd2fd471cd4a86e4fca380ca47f043"
    }
  }
});

export { auth as a };
