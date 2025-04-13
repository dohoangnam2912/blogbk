const newsRouter = require('./news');
const siteRouter = require('./site');
const blogsRouter = require('./blogs');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/blogs', blogsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
