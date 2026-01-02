import express from "express";
import { getInstagramFeed } from "./instagram.controller.js";

const instagramRoutes = express.Router();

instagramRoutes.get("/feed", getInstagramFeed);

export default instagramRoutes;
