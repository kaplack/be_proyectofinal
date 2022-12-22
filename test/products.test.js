import assert from "assert";
import axios from "axios";

const get = (url, cb) => {
  return axios.get(url);
};

describe("Test integration", function () {
  it("the api must return 2 elements", async () => {
    const res = await get("http://127.0.0.1:8080/products");
    //console.log(res.data);
    assert.equal(res.data.length, 2);
  });

  it("the api must return de product id", async () => {
    const res = await get(
      "http://127.0.0.1:8080/products/637edc0cf3a5651747c69d17"
    );
    assert.equal(res.data[0]._id, "637edc0cf3a5651747c69d17");
  });
});
