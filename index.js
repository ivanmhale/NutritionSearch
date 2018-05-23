const express = require('express');

const app = express();

require('./routes/index')(app);

app.listen(process.env.PORT || 5000);
