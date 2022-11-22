"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log(req);
};

loginBtn.addEventListener("click", login);
