const request = require("request");
let keys;

if (process.env.NODE_ENV === "production") {
  keys = {
    appId: process.env.appId,
    appKey: process.env.appKey
  };
} else {
  keys = require("../keys");
}

module.exports = app => {
  app.get("/search/:term", (req, res) => {
    const term = req.params.term;
    request(
      `https://api.nutritionix.com/v1_1/search/${term}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=${
        keys.appId
      }&appKey=${keys.appKey}`,
      (err, response, body) => {
        res.send(body);
      }
    );
  });

  app.get("/lookup/:id", (req, res) => {
    const id = req.params.id;
    request(
      `https://api.nutritionix.com/v1_1/item?id=${id}&appId=${
        keys.appId
      }&appKey=${keys.appKey}`,
      (err, response, body) => {
        res.send(body);
      }
    );
  });
};
