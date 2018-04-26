'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
    // async add() {
    //     const data = this.ctx.params.data;
    //     const result = yield this.service.mysql.add(data);
    //     this.ctx.body = 'success';
    // }
}

module.exports = HomeController;
