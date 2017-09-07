var express = require('express')
var app = express()


app.use("/static", express.static(__dirname + '/static'));
app.use("/images", express.static(__dirname + '/images'));

app.get('*', function (req, res) {
  res.sendFile('/index.html', { root: __dirname })
})

app.listen(3000, function () {
  console.log('Listining to port 3000!')
})