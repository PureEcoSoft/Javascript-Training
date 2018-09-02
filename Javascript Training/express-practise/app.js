var express=require('express');
var app=express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/calv1/:num1/:num2',(req,res)=>{
    console.log(req.params);

    res.send(`Addition of ${req.params['num1']} and ${req.params['num2']} is ${parseInt(req.params['num1']) + parseInt(req.params['num2'])}`);
});

app.post('/calv2',(req,res)=>{
   // console.log("Post Functions");
   let custRes={}
    console.log(req.body);
    if(req.body.operations === "+"){
        let num1= req.body.num1;
        let num2= req.body.num2;
        custRes={
            "status":200,
            "value":` Addition of ${req.body.num1} and ${req.body.num2} is ${num1+num2}`
        }
    }
    else{
        custRes={
            "status":400,
            "message":`Operation is not found`
        }
    }
    res.send(custRes);
})



app.listen(3000, () => 
console.log('Example app listening on port 3000!'))

