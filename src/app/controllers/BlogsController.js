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

    // [GET] /blogs/create
    create(req, res, next) {
        res.render('blogs/create');
    }

    // [POST] /blogs/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const blog = new Blog(formData);
        await blog
            .save()
            .then(() => {
                res.redirect(`/`);
            })
            .catch((error) => {});
    }
}

module.exports = new BlogsController();
