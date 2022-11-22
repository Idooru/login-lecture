"use strict";

// 모듈
const express = require("express");
const router = express.Router();

// 컨트롤러 연결
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);
router.post("/login", ctrl.login);

module.exports = router;
