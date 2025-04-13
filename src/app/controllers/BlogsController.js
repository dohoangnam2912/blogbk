const Blog = require('../models/Blog');
class BlogsController {
    // [GET] /blogs/:slug
    show(req, res, next) {
        Blog.findOne({ slug: req.params.slug })
            .lean()
            .then((blog) => {
                res.render('blogs/show', { blog });
            })
            .catch(next);
    }
}

module.exports = new BlogsController();
