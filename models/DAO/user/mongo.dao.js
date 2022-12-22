import mongoose from "mongoose";
import UserBaseDAO from "./base.dao.js";
import createProductDTO from "../../DTO/product.dto.js";
import UserModel from "../../models/user.models.js";
import logger from "../../../config/myLogger.js";
import getDBConnectInstance from "../../../config/dbConnect.js";

class UserMongoDAO extends UserBaseDAO {
  constructor() {
    super();
    (async () => {
      logger.info("Connecting mongo DB ...");
      const connection = getDBConnectInstance();
      this._collection = UserModel;
    })();
  }

  getUser = async (_id) => {
    try {
      if (_id) {
        const newOne = await this._collection.find({
          _id: _id,
        });

        return newOne;
      }

      return await this._collection.find({});
    } catch (e) {
      logger.error("Error to get user", e);

      return [];
    }
  };

  updateUser = async (_id, object) => {
    const update = await this._collection.updateOne(
      { _id: _id },
      { $set: { ...object } }
    );
  };

  insertUser = async (newToInsert) => {
    try {
      await this._collection(newToInsert).save();

      return newToInsert;
    } catch (e) {
      logger.error("Error to insert users", e);

      return newToInsert;
    }
  };
  //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
  //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }
}

export default UserMongoDAO;
