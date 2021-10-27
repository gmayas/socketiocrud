const mongoose = require('mongoose');

mongoose.connect(process.env['URIMONGODB'], {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('db connected in Cluster0', process.env['URIMONGODB']))
  .catch(err => console.log('db connected error in Cluster0: ', err));