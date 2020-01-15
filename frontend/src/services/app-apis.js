export default {
  
    // This is for the API endpoints
    getAppServerUrl() {
      // TODO: Uncomment this if in case the API server is behind a reverse proxy (e.g nginx)
      // if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000';
      // } else {
        // return 'http://api-server:3000/api'
      // }
    },
    
    getSaveProductUrl() {
        return `${this.getAppServerUrl()}/products/save-product`;
    },
    
    getListAllProductsUrl() {
        return `${this.getAppServerUrl()}/products/all-products`;
    },            
}