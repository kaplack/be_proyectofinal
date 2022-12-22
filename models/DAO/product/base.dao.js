class ProductBaseDAO {
  constructor() {}

  getUser = async (_id) => {
    throw new Error(`Method getProducts not implemented`);
  };
  insertNoticia = async (newToInsert) => {
    throw new Error(`Method insertNoticia not implemeted`);
  };
  updateNoticia = async (_id, newToUpdate) => {
    throw new Error(`Method updateNoticia not implemeted`);
  };
  deleteNoticia = async (_id, newToUpdate) => {
    throw new Error(`Method deleteNoticia not implemeted`);
  };

  getNextID(products = []) {
    const total = products.length;
    return total ? parseInt(products[total - 1]._id) + 1 : 1;
  }

  getIndex(_id, products) {
    return products.findIndex((n) => n._id == _id);
  }
}
export default ProductBaseDAO;
