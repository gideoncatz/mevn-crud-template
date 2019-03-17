const express = require('express');
const productsRouter = express.Router();
const jsonParser = require('body-parser').json();
const productsLogic = require('../logic/products-logic');

productsRouter.get('/all-products', async (req, res, next) => {
    let allProducts = await productsLogic.getAllProducts();
    res.send(allProducts);
});

productsRouter.post('/save-product', jsonParser, async (req, res, next) => {    
    let status = await productsLogic.saveProduct(req.body);
    res.send({success: status});
});

module.exports = productsRouter;
