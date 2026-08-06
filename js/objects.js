// Person Object တည်ဆောက်ခြင်း
const person = {
  name: "Aung Aung", 
  age: 25,           
  isDeveloper: true  
};

// (Accessing Properties)
console.log(person.name);        
console.log(person["age"]);      

// Changing Properties Data
person.age = 26;                 
person.city = "Yangon";  

console.log(person)

console.log(person["age"]);
console.log(person["city"]);


