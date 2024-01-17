import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "jiwontax48*",
  database: "ltalk",
});

export const db = pool.promise();
