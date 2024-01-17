import { db } from "../db/database.js";

export async function getList() {
  const sql = `SELECT  * FROM talk_member`;
  return db.execute(sql, []).then((res) => res[0]);
}
