class UserBaseDAO {
  constructor() {}

  getUsers = async (_id) => {
    throw new Error(`Method getProducts not implemented`);
  };
  insertUser = async (newToInsert) => {
    throw new Error(`Method insertNoticia not implemeted`);
  };
  updateUser = async (_id, newToUpdate) => {
    throw new Error(`Method updateNoticia not implemeted`);
  };
  deleteUser = async (_id, newToUpdate) => {
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
export default UserBaseDAO;
