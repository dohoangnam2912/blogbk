module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
    },
    singleMongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
