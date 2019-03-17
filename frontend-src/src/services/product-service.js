import axios from 'axios';
import appAPIs from './app-apis';

export default {
    listAllProducts: async function() {
        const response = await axios.get(appAPIs.getListAllProductsUrl(), 
                                          {headers: {'Content-Type': 'application/json'},
                                          });            
        return response.data;
    },

    saveProduct: async function(productData) {
        const response = await axios.post(appAPIs.getSaveProductUrl(), 
                                          {...productData},
                                          {headers: {'Content-Type': 'application/json'} });            
        return response.data;
    },
}