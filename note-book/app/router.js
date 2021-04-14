'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // Controller 负责解析用户的输入，处理后返回相应的结果
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test',controller.home.test)
  router.get('/user',controller.user.index)
  router.get('/getid/:id',controller.user.getid)
  router.post('/add',controller.user.add)
  router.get('/getUser',controller.user.add)

};
