const express = require("express");
const mongoos = require("mongoose")
const items = require('./routes/api/Item')

const app = express();
app.use(express.json())

const db = require("./config/keys").mongoURI;
mongoos.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>console.log("...Connected"))
.catch((err)=>console.log("Error",err))


app.use('/api/items',items)


const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server started ${port}`))