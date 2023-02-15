function myFunc() {
    return (25); // func tipi return e göre belli olacaktır ya da hicbir return etmezsen void olur.
}
var c = myFunc(); // eger myFunc hicbirsey return etmezse void ise c undefined type olur.
/* //@ts-ignore       // bu komut buradan aşağısını javascript olarak derle der.
const c  =  myFunc()  as string; */
var result = myFunc(); // as string diyemeyiz cunku ilk degeri number atadıgımız icindir. 
function myTuple() {
    return ([25, "selam"]); // func tipi return e göre belli olacaktır.
}
function myConst() {
    return ([25, "selam"]); // func tipi return e göre belli olacaktır.
}
function logPerson(isim, soyisim, yas) {
    console.log({ isim: isim, soyisim: soyisim, yas: yas });
}
var toplama = function (a, b) { return console.log(a + b); }; // toplama func ismi oluyor.
(5, 4);
console.log(9);
toplama(4, 5);
logPerson("Kamil", "ismet", 25);
