
const Koa = require('koa');
const createRoutes = require('./router');
const bodyParser = require('koa-bodyparser');

// Create a Koa app
const app = new Koa();

app.use(bodyParser());


// Use the routes middleware
app.use(createRoutes);

// Start the Koa server
const PORT=4000
const server = app.listen(PORT);

console.log(`Koa app running on http://localhost:${PORT}`);
