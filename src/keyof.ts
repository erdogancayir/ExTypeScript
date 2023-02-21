interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
  }
  
  // 'brand' | 'model' | 'year' | 'color'
  type CarKey = keyof Car;
  
  // Örnek kullanım
  const car: Car = {
    brand: 'BMW',
    model: 'X5',
    year: 2022,
    color: 'black'
  };
  
  function getCarValue(car: Car, key: CarKey) {
    return car[key];
  }
  
  console.log(getCarValue(car, 'brand')); // 'BMW'
  console.log(getCarValue(car, 'model')); // 'X5'
  console.log(getCarValue(car, 'year')); // 2022
  console.log(getCarValue(car, 'color')); // 'black'
