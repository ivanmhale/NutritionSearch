const keys = require("../keys");
const request = require("request");

module.exports = app => {
  app.get("/search/:term", (req, res) => {
    const term = req.params.term
    request(
      `https://api.nutritionix.com/v1_1/search/${term}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=${
        keys.appId
      }&appKey=${keys.appKey}`,
      (err, response, body) => {
        res.send(body);
      }
    );
  });
};
