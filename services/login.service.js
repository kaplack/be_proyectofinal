import UserAPI from "../api/user.api.js";

const usersAPI = new UserAPI();

const validateUserServices = async (userName) => {
  let usersData = await usersAPI.getUser();
  let currUser = usersData.filter((u) => u.username == userName);
  return currUser;
};

export default validateUserServices;
