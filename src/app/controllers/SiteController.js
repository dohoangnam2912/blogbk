const Blog = require('../models/Blog');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                blogs = blogs.map((blogs) => blogs.toObject());
                console.log(blogs);
                res.render('home', {
                    blogs, // blogs: blogs
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
