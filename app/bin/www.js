"use strict";

import { app } from "../app.js";

app.listen(app.get("PORT"), () => {
  console.log("서버 가동");
});
