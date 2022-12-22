import mongoose from "mongoose";
import ProductBaseDAO from "./base.dao.js";
import createProductDTO from "../../DTO/product.dto.js";
import ProductsModel from "../../models/products.models.js";
import logger from "../../../config/myLogger.js";
import getDBConnectInstance from "../../../config/dbConnect.js";
import logOutRouter from "../../../routes/logout.routes.js";

class ProductMongoDAO extends ProductBaseDAO {
  constructor(database, collection) {
    super();
    (async () => {
      logger.info("Connecting mongo DB ...");
      const connection = getDBConnectInstance();

      this._collection = ProductsModel;
    })();
  }

  getProducts = async (_id) => {
    try {
      if (_id) {
        const newOne = await this._collection.find({
          _id: _id,
        });

        return newOne;
      }

      return await this._collection.find({});
    } catch (e) {
      logger.error("Error to get products", e);

      return [];
    }
  };
  insertProduct = async (newToInsert) => {
    try {
      await this._collection(newToInsert)
        .save()
        .then((result) => {
          return result;
        });

      //return newToInsert;
    } catch (e) {
      logger.error("Error to insert products", e);

      return newToInsert;
    }
  };
  delProduct = async (id) => {
    await this._collection
      .deleteOne({ _id: id })
      .then(() => {
        logger.info(`Product deleted id:${id}`);
        return id;
      })
      .catch((error) => {
        logger.error(error);
      });
  };
  //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
  //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }
}

export default ProductMongoDAO;
