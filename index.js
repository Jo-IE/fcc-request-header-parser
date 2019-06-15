var express = require("express");
var router = express.Router();


router.use(express.static("public"));
router.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html")
})

router.get("/whoami", function(req, res){
    //console.log(req.headers)
    var lang = req.header('accept-language')
    var software = req.header("user-agent")
    var ip = req.header("x-forwarded-for")
    res.json({"ip address": ip, "language":lang, "software":software})
})

module.exports = router;

