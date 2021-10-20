var express = require('express')

var app = express();

var port = process.env.PORT || 8976;


// routes
app.get('/',(req,res)=>{
    res.send('Hello APi');
})

app.listen(port,()=>{
        `running app on port ${port}`
})