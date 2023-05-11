const arrData = [
  { no: 1, name: "John", age: 30, city: "New York" },
  { no: 2, name: "Ha Lan", age: 28, city: "Ha Noi" },
  { no: 3, name: "Paul", age: 25, city: "Phnom Penh" },
  { no: 4, name: "Keele", age: 25, city: "Toronto" },
  { no: 5, name: "Noel Hoo", age: 25, city: "Singapore" },
  { no: 6, name: "Luke", age: 25, city: "Yangon" },
  { no: 7, name: "Jack", age: 25, city: "Five Million" },
];

function callbackFn(data) {
    
  console.log(arrData.slice(0, data));
}
