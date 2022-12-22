import config from "../../config/config.js";

function createProductDTO(newOne, _id, datetime) {
  if (config.TYPE_DB != "mongo") {
    return {
      ...newOne,
      _id,
      datetime,
    };
  } else {
    return { ...newOne };
  }
}

export default createProductDTO;
