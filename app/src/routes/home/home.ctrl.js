"use strict";

import { User } from "../../models/User.js";

export const output = {
  home: (req, res) => {
    res.render("./home/index");
  },

  login: (req, res) => {
    res.render("./home/login");
  },
};

export const process = {
  login: (req, res) => {
    const user = new User(req.body);
    return res.json(user.login());
  },
};
