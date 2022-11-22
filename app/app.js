"use strict";

// 모듈
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// 초기화
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 라우팅
import home from "./src/routes/home/index.js";

// 앱 세팅
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.set("PORT", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/src/public`));

// 라우팅 미들웨어 등록
app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

export { app };
