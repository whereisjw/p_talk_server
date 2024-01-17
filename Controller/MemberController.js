import * as MemberRepository from "../Repository/MemberRepository.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export async function signUp(req, res) {
  const { id, pass, sayhi } = req.body;
  let hashpass = bcryptjs.hashSync(pass, 8);
  let result = await MemberRepository.signup(id, hashpass, sayhi);
  if (result === "ok") {
    res.json(result);
  } else {
    console.log("중복된아이디값");
  }
}

export async function login(req, res) {
  const { id, pass } = req.body;
  let row = await MemberRepository.login(id);
  row.result = false;
  let token = null;
  if (row.cnt === 1) {
    if (await bcryptjs.compare(pass, row.pass)) {
      const token = jwt.sign({ id: id }, `pB2(?uq0{.9)`);
      row.token = token;
      row.result = true;
    } else {
      //비번틀림
    }
  } else {
    //아이디없음
  }
  res.json(row);
}
