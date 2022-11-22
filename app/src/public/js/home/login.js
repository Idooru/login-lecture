"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

const login = async () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  try {
    const { data } = await axios.post("/login", req);
    console.log(data);
    if (data.success) {
      location.href = "/";
    } else {
      alert(data.msg);
    }
  } catch (err) {
    console.error(err);
  }
};

loginBtn.addEventListener("click", login);
