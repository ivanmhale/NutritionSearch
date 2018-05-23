const express = require('express');

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/index')(app);

app.listen(process.env.PORT || 5000);
