//Import all Schemas
const User = require('./user.model');
const Category = require('./productCategory.model');
const Product = require('./product.model');

//Export all schemas
module.exports = {
    User,
    Category,
    Product
};