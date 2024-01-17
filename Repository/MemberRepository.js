import { db } from "../db/database.js";

export async function signup(uid, pass, sayhi) {
  const sql = `INSERT INTO talk_member (uid,pass, sayhi) VALUES (?,?,?)`;
  return db.execute(sql, [uid, pass, sayhi]).then((res) => "ok");
}

export async function login(id) {
  const sql = `SELECT count(pass) AS cnt,any_value(pass) AS pass  FROM talk_member WHERE uid = ?`;
  return db.execute(sql, [id]).then((res) => res[0][0]);
}
