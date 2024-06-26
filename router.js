
const Router = require('koa-router');
const errors = require('@feathersjs/errors');
const feathersApp = require('./service');
const {msg} = require('./message');

const router = new Router();

// Koa middleware for handling GET requests

router.get('/echo', async (ctx) => {
  try {
    
    ctx.body = msg.SERVER_HEALTH;
  } catch (error) {
    throw new errors.NotFound(msg.NOT_FOUND);
  }
});

// Koa middleware for handling POST requests
router.post('/echo', async (ctx) => {
  try {
    
    const message = await feathersApp.service('echo').create(ctx.request.body);
    ctx.body = message;
  } catch (error) {
    console.error("Error from post req: : ",error)
    throw new errors.BadRequest(msg.INVALID_REQ);
  }
});

module.exports = router.routes();
