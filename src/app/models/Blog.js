const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: Date, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', Blog);
