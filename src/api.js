"use strict";
exports.__esModule = true;
var express = require('express');
// Express uygulamasını oluştur
var app = express();
// Route handler'ı
app.get('/selam', function (req, res) {
    res.send('Merhaba Dünya!');
});
// Uygulamayı belirtilen portta dinle
app.listen(3000, function () {
    console.log('Uygulama 3000 numaralı portta çalışıyor! http://localhost:3000');
});
