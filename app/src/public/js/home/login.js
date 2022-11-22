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

    if (data.success) {
      location.href = "/";
    } else if (data.success === false) {
      alert(data.msg);
    } else {
      throw new Error("로그인 중 에러 발생");
    }
  } catch (err) {
    console.error(err);
  }
};

loginBtn.addEventListener("click", login);
