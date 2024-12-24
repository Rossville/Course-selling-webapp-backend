const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

app.post('/user-data',function(req,res){
    const userData = {
        username : req.body.username,
        password: req.body.password
    }
    console.log(userData);
    res.status(200).json({
        message: "User Data is received"
    })
})

app.listen(port,()=>{
    console.log('You\'re listening to port : ',port);
})