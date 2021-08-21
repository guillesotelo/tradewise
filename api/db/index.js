const mongoose = require('mongoose');

const uri = "mongodb+srv://tradewise:3365@cluster0.up895.mongodb.net/TradeWise?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  
module.exports = mongoose