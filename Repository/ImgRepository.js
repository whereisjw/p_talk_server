import { db } from "../db/database.js";

export async function ChangeImg(img,id) {
    const sql = `UPDATE talk_member SET img=? WHERE uid = ?`
  return db
    .execute(sql, [img, id])
    .then((result) => "ok");
}
