const { default: parseJSON } = require("date-fns/fp/parseJSON/index.js");
let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Listening on port ${port} !`));


let {CALLrows,CALLcolumn, CALLcolumns} = require("./CallJSON.js")
let { SMScolumns,SMSrows}  = require("./SMSJSON.js")

app.get("/getSMS",function(req,res){
    let json ={SMScolumns:SMScolumns,SMSrows:SMSrows}
    res.send(json)
})
app.get("/getCALL",function(req,res){
    let json = {CALLcolumn:CALLcolumn,CALLrows:CALLrows}
    res.send(CALLrows)
})