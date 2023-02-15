import { rejects } from "assert";
import { resolve } from "path";

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Rastgele bir sayı oluşturalım
        const randomNum = Math.floor(Math.random() * 10);
  
        // Eğer rastgele sayı çift ise, işlem başarılı oldu olarak kabul edelim
        if (randomNum % 2 === 0) {
          resolve(`Başarılı! Rastgele sayı: ${randomNum}`);
        } else {
          // Eğer rastgele sayı tek ise, işlem hatalı olarak kabul edelim
          reject(`Hata! Rastgele sayı: ${randomNum}`);
        }
      }, 2000);
    });
  }
  
  // myAsyncFunction fonksiyonunu çağıralım ve sonucunu işleyelim
  myAsyncFunction()
    .then((result) => {
      console.log(result); // Başarılı! Rastgele sayı: X
    })
    .catch((error) => {
      console.error(error); // Hata! Rastgele sayı: Y
    })
    .finally(() => console.log('İlk örnek tamamlandı.'));
  



const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Örnek kullanım
get('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => console.log('İstek tamamlandı.'));

