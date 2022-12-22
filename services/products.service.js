// import ProductsModel from "../models/models/products.models.js";
// import myConnect from "../config/dbConnect.js";

// const getProductsServices = () => {
//   myConnect();
//   return ProductsModel.find().then((result) => {
//     return result;
//   });
// };

// const postProductService = (productObject) => {
//   myConnect();
//   const product = new ProductsModel(productObject);
//   product
//     .save()
//     .then((result) => {
//       console.log("objeto guardado: ", result);
//       return result;
//     })
//     .catch((error) => {
//       res.status(500).json({ mensaje: "no se guardo la información" });
//     });
// };

// export { getProductsServices, postProductService };

import ProductAPI from "../api/products.api.js";

class ProductService {
  constructor() {
    this.productAPI = new ProductAPI();
  }

  async getUserProduct(id) {
    let productItems = await this.productAPI.getProducts();
    let userItems = productItems.filter((item) => item.userID == id);
    return userItems;
  }

  async deleteUserProduct(id) {
    let deletedItem = await this.productAPI.delProduct(id);
    return deletedItem;
  }
}

export default ProductService;
