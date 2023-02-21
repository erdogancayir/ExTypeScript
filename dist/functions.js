function myFunc() {
    return (25); // func tipi return e göre belli olacaktır ya da hicbir return etmezsen void olur.
}
const c = myFunc(); // eger myFunc hicbirsey return etmezse void ise c undefined type olur.
/* //@ts-ignore       // bu komut buradan aşağısını javascript olarak derle der.
const c  =  myFunc()  as string; */
const result = myFunc(); // as string diyemeyiz cunku ilk degeri number atadıgımız icindir. 
function myTuple() {
    return ([25, "selam"]); // func tipi return e göre belli olacaktır.
}
function myConst() {
    return ([25, "selam"]); // func tipi return e göre belli olacaktır.
}
function logPerson(isim, soyisim, yas) {
    console.log({ isim, soyisim, yas });
}
logPerson("Kamil", "ismet", 25);
// Arrow function ile fonksiyon tanımlama
const toplama = (a, b) => console.log(a + b); // toplama func ismi oluyor.
toplama(4, 5);
// Arrow function ile forEach() kullanma
const dizi = [1, 2, 3, 4, 5];
dizi.forEach((eleman, index) => {
    console.log(`Dizi elemanı ${index} = ${eleman}`);
});
