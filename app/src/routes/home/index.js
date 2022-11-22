"use strict";

// 모듈
const express = require("express");
const router = express.Router();

// 컨트롤러 연결
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;
