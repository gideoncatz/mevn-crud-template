export default {
    appServerProtocolAndHost: '{{AppServerProtocolAndHost}}',
    appServerPort: '{{AppServerPort}}',
    apiSubRoute: '{{AppServerUri}}', // in deployment environment, this will be replaced with /api
  
    // This is for the API endpoints
    getAppServerUrl() {
      if (this.appServerProtocolAndHost.startsWith('{{')) {
        return 'http://localhost:3000';
      } else {
        return `${this.appServerProtocolAndHost}:${this.appServerPort}${this.apiSubRoute}`;
      }
    },
    
    getSaveProductUrl() {
        return `${this.getAppServerUrl()}/products/save-product`;
    },
    
    getListAllProductsUrl() {
        return `${this.getAppServerUrl()}/products/all-products`;
    },            
}