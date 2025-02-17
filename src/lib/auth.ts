import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import pkg from "pg"
const {Pool} = pkg;
// 获取环境变量
const databaseType = import.meta.env.DATABASE_TYPE || "sqlite3";  // 默认使用 sqlite3

let database;

if (databaseType === "sqlite3") {
  // 使用 SQLite
  database = new Database("database.sqlite");
} else if (databaseType === "postgres") {
  // 使用 PostgreSQL
  const pool = new Pool({
    connectionString: import.meta.env.DATABASE_URL, // 使用你配置的数据库 URL
  });
  database = pool;
} else {
  throw new Error(`Unsupported DATABASE_TYPE: ${databaseType}`);
}
export const auth = betterAuth({
    database: database,
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