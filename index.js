const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const customerModule = require('./src/modules/customer/customer.routes');
const subscriptionModule = require('./src/modules/subscription/subscription.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send("Hello on API v1");
});

app.use('/customer', customerModule);
app.use('/subscription', subscriptionModule);

app.listen(3000, () => {
  console.log("App running in 3000");
});