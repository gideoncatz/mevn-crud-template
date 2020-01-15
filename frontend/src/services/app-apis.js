export default {
    // This is for the API endpoints
    getAppServerUrl() {
        return 'http://localhost:3000';
    },
    
    getSaveProductUrl() {
        return `${this.getAppServerUrl()}/products/save-product`;
    },
    
    getListAllProductsUrl() {
        return `${this.getAppServerUrl()}/products/all-products`;
    }        
}