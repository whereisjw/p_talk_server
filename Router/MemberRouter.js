import express from "express";
import { login, signUp } from "../Controller/MemberController.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/", login);

export default router;
