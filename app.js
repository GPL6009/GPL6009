//
//app.js
//

const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
//app.use(express.json());

app.use(bodyParser.urlencoded());


const adminRoutes = require('./routes/admin');
//const adminController = require('./controller/adminController');
//const shopRoutes = require('./routes/shop')

app.use(express.static(path.join(__dirname,'public')))


app.use("/admin",adminRoutes);
//app.use(adminController);
app.use(adminRoutes);
//app.use(shopRoutes);
//app.use((req,res,next)=>{
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
//})



app.listen(8000);


 
