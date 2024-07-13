var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hey, I started 3 months ago and I've been doing TOP almost full-time(sometimes more than 40 hours / week, sometimes less depending on how busy I was that week). Good luck to everyone reading this message!",
    user: "Serhii (me)",
    added: new Date()
  },
  {
    text: "Hello World! That's a test text",
    user: "King Charles, the III",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { messages: [...messages].reverse() });
});

router.post("/new", function(req, res, next){
  messages.push(
    {
      text: req.body.message,
      user: req.body.name,
      added: new Date()
    });
    res.redirect("/");
})
module.exports = router;