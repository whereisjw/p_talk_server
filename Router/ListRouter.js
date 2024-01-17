import express from "express";
import { getList } from "../Controller/ListController.js";

const router = express.Router();

router.get("/", getList);

export default router;
