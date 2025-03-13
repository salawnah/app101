const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());

app.post('/', function (req, res, next) {
    console.log(req.body);
    let unit = req.body.unit;
    let value = req.body.value;
    var result;
    let to_unit = unit==='C'?'F':'C';
    if(unit==='C'){ result = value*9/5.0+32;}
    else {result = ((value-32)*5/9.0)}
    res.json({
        from_unit: unit,
        to_unit: to_unit,
        input: value,
        result:result
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})