const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL,{
})
.then(async()=>{
    console.log('conectado a mongoDB')
  })
  .catch((err)=>console.log(`error connecting`))

