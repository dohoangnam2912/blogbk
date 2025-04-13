const Blog = require('../models/Blog');
const {
    multipleMongooseToObject,
    singleMongooseToObject,
} = require('../../utils/mongoose_utils');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Blog.find({})
        //     .then((blogs) => {
        //         res.render('home', {
        //             blogs: multipleMongooseToObject(blogs), // blogs: blogs
        //         });
        //     })
        //     .catch(next);
        Blog.find({})
            .lean()
            .then((blogs) => {
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
