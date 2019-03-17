const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    catalogNum: Number,
    name: String,
    price: Number,    
  },
  { strict: true }
);

ProductSchema.index({ catalogNum: 'hashed' });

module.exports = mongoose.model('products', ProductSchema);