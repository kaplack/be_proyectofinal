// class Products {
//   constructor(userID, name, description, price, stock, thumbnail) {
//     this.userID = userID;
//     this.name = name;
//     this.description = description;
//     this.price = price;
//     this.stock = stock;
//     this.thumbnail = thumbnail;
//   }
// }

// export default Products;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userID: { type: String, require: true },
    name: { type: String, require: true, max: 100 },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    thumbnail: { type: String, require: true },
  },
  { timestamps: true }
);

const ProductsModel = mongoose.model("col_products", productSchema);

export default ProductsModel;
