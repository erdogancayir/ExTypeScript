// Örnek kullanım
const car = {
    brand: 'BMW',
    model: 'X5',
    year: 2022,
    color: 'black'
};
function getCarValue(car, key) {
    return car[key];
}
console.log(getCarValue(car, 'brand')); // 'BMW'
console.log(getCarValue(car, 'model')); // 'X5'
console.log(getCarValue(car, 'year')); // 2022
console.log(getCarValue(car, 'color')); // 'black'
