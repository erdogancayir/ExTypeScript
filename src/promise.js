"use strict";
exports.__esModule = true;
//Promise nesneleri, genellikle asenkron işlemleri temsil etmek için kullanılır. İşlev, bir asenkron işlemi 
//başlatır ve işlem tamamlandığında veya bir hata oluştuğunda Promise nesnesinin durumunu belirler. 
//Sonra bu Promise nesnesi, işlem tamamlandığında veya bir hata oluştuğunda uygun şekilde işlenebilir.
/*
new Promise((resolve, reject) => {
  // başarılı ise
  resolve();
  // hatalı ise
  reject();
})
*/
// parametreler Promise nesnesinin durumunu (tamamlandı veya reddedildi) belirlemek için kullanılır.
// Bir asenkron işlev tanımlayalım, 2 saniye sonra sonlanacak
function myAsyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // Rastgele bir sayı oluşturalım
            var randomNum = Math.floor(Math.random() * 10);
            // Eğer rastgele sayı çift ise, işlem başarılı oldu olarak kabul edelim
            if (randomNum % 2 === 0) {
                resolve("Ba\u015Far\u0131l\u0131! Rastgele say\u0131: ".concat(randomNum));
            }
            else {
                // Eğer rastgele sayı tek ise, işlem hatalı olarak kabul edelim
                reject("Hata! Rastgele say\u0131: ".concat(randomNum));
            }
        }, 2000);
    });
}
// myAsyncFunction fonksiyonunu çağıralım ve sonucunu işleyelim
myAsyncFunction()
    .then(function (result) {
    console.log(result); // Başarılı! Rastgele sayı: X
})["catch"](function (error) {
    console.error(error); // Hata! Rastgele sayı: Y
})["finally"](function () { return console.log('İlk örnek tamamlandı.'); });
var https = require('https');
function get(url) {
    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                resolve(data);
            });
        }).on('error', function (err) {
            reject(err);
        });
    });
}
// Örnek kullanım
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log('Başarılı:', json); })["catch"](function (error) { return console.error('Hata:', error); })["finally"](function () { return console.log('İstek tamamlandı.'); });

function hello() {
    return "hello world";
}
function hello2() {
    return new Promise(function (resolve) { return resolve("Hello World2"); });
}
var text = hello2();
console.log(text);
