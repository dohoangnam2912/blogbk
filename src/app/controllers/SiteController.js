const Blog = require('../models/Blog');
const {
    multipleMongooseToObject,
    singleMongooseToObject,
} = require('../../utils/mongoose_utils');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Blog.find({})
            .lean()
            .then((blogs) => {
                res.render('home', {
                    blogs,
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
