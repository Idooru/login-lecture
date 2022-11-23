"use strict";

export class UserStorage {
  static #users = {
    id: ["woorimIT", "나개발", "김팀장"],
    pw: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;

    if (!users.id.includes(id)) {
      return `해당 아이디(${id}) 없음`;
    }

    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}
