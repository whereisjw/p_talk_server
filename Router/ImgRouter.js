import express from "express";
import { ChangeImg } from "../Controller/ImgController.js";

const router = express.Router();

router.post('/',ChangeImg)

export default router;
