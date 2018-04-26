'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    this.ctx.body = 'login login login';
  }
  async login() {
    console.log('**************************' + JSON.stringify(this.ctx.request.body));

    let data = this.ctx.request.body;
    const username = data.username;
    const password = data.password;
    const userInfo = await this.ctx.service.login.loginCheck(username, password);
    var result = {}
    console.log('userinfo-------------------', userInfo)
    if (userInfo.length > 0) {
      result.status = 'success';
      result.data = [];
      this.ctx.body = result;
    } else {
      result.status = 'error';
      this.ctx.body = result;
    }
  }
}

module.exports = LoginController;
