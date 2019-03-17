<template>
  <div class="top">
    <table border="5" class="products-table">
      <tr>
        <th>
          Catalog number
        </th>
        <th>
          Name
        </th>
        <th>
          Price
        </th>
      </tr>
      <tr v-for="product of products" :key="product.catalogNum">
        <td>
          {{product.catalogNum}}
        </td>
        <td>
          {{product.name}}
        </td>
        <td>
          {{product.price}}
        </td>
      </tr>
    </table>
    <div v-if="editedProduct.catalogNum > 0">
      <div>
        <input type="text" v-model="editedProduct.catalogNum" disabled>
        <input type="text" v-model="editedProduct.name">
        <input type="text" v-model="editedProduct.price">
      </div>
      <button @click="handleProductSave">Save</button>
    </div>
    <button v-if="editedProduct.catalogNum === 0" @click="editedProduct.catalogNum = getNextCatalogNum()">Add new product</button>
  </div>
</template>

<script>
import productsService from '../services/product-service.js';
import productService from '../services/product-service.js';
export default {
  name: 'Products',
  data() {
    return {
      products: [],
      editedProduct: {
        catalogNum: 0,
        name: '',
        price: 0
      }
    }
  },
  created() {
    this.reloadProductsList();
  },
  methods: {
    getNextCatalogNum() {
      return this.products.reduce((acc, currProd) => Math.max(acc, currProd.catalogNum), 100) + 1;
    },
    async handleProductSave() {
      let result = await productsService.saveProduct({
        catalogNum: this.editedProduct.catalogNum,
        name: this.editedProduct.name,
        price: this.editedProduct.price
      });
      if (result) {
        this.reloadProductsList();
        this.clearEditFields();
        alert('Product saved successfully');
      }
      else {
        alert('Oops, something went wrong');
      }
    },
    clearEditFields() {
      this.editedProduct.catalogNum = 0;
      this.editedProduct.name = '';
      this.editedProduct.price = 0;
    },
    async reloadProductsList() {
      let updatedProducts = await productService.listAllProducts();
      if (updatedProducts) {
        this.products = updatedProducts;
      }
      else {
        alert ('Error retrieving products list!');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products-table {
  margin: 30px auto 30px auto;
  /*border: 5px solid grey; */
}
/* th {
  border: 5px solid grey;
} */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
