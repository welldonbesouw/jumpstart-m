import axios from "axios";

const API_URL = "api/products";

class ProductService {
  allProducts() {
    return axios.get(API_URL + "/featured");
  }
  searchProducts(keyword) {
    return axios.get(API_URL + `?keyword=${keyword}`);
  }

  newProducts() {
    return axios.get(API_URL + "/new");
  }
}

export default new ProductService();
