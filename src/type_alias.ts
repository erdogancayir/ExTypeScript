type MyNumber = number; 

let x: MyNumber = 5;
console.log(x); // Output: 5



type Colors = 'blue' | 'yello' | 'black';
type Colors2 = '3' | '2' | '1';

const myColor : Colors = 'yello';

const myColorArr : Colors[] = ['black', 'yello'];



type Person = 
{
        name?: string;
        age: number;
};
  
type Employee = Person & 
{    
    employeeId: number;
};
  
const employee: Employee = {
    age: 30,
    employeeId: 1234
  };
  
  console.log(employee); // Output: { name: 'John Doe', age: 30, employeeId: 1234 }
  
