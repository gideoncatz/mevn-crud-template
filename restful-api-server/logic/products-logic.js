const Products = require('../models/products.model');

module.exports.saveProduct = async function (productData) {

    try {

        let productObject = await Products.findOneAndUpdate(
            { catalogNum: productData.catalogNum },
            { ...productData },
            { upsert: true }
            );
            
    } catch (err) {
        console.log('Error while saving product:', err);
        return false;
    }
    return true;
}

module.exports.getAllProducts = async function() {
    let productsList = Products.find({});
    return productsList;
}