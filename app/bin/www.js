"use strict";

const app = require("../app");

app.listen(app.get("PORT"), () => {
  console.log("서버 가동");
});
