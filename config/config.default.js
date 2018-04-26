'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {
    view: {
      root: [
        path.join(appInfo.baseDir, 'app/public')
      ].join(','),
      mapping: {
        '.nj': 'nunjucks',
      },
      defaultViewEngine: 'nunjucks',
    },
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '888888',
        database: 'react_node',
      },
      app: true,
      agent: false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524037886106_5668';

  // add your config here
  config.middleware = [ 'header' ];

  config.security = {
    csrf: {
      enable: false
    }
  };

  return config;
};
