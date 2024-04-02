
const feathers = require('@feathersjs/feathers');

const feathersApp = feathers();

feathersApp.use('/echo', {
  

  async create(data) {
  
    return data;
  }
});

module.exports = feathersApp;
