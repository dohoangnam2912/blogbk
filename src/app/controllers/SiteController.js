const Blog = require('../models/Blog');

class SiteController {
    // [GET] /
    index(req, res) {
        // Blog.find({}, async function (err, blogs) {
        //     if (!err) res.json(courses);
        //     res.status(400).json({error: 'ERROR!!!'})
        // })
        const blogs = Blog.find({});
        blogs.forEach(function (blog) {
            res.json(blog);
            res.status(400).json({ error: 'ERROR!!!' });
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
