// 1 
function unbracketTag(str) {
    return str.slice(0, );
}
let s= unbracketTag('To be or not to be', 'not')
console.log(s);

// 2
// let str =   '<div>' 
// function unbracketTag(str) {
//     return str.slice(1, -1);
// }
// let s = unbracketTag(s)
// console.log(s)
// 3
// function isPrime(n) {
//     if( n % 2 === 0){
//  console.log(true)
//     }else if(n % 2 !== 0)
// console.log(false)
// }
// console.log(isPrime(5))

// 5
// function getSumBetweenNumbers(n1, n2) {
//     let son = 0;
//     for (let i = n1; i <= n2; i++) {
//         son += i;
//     }
//     return son;
// }

// console.log(getSumBetweenNumbers(1,15))




// 6
// let s = [1, 5, 6, 1, 5, 7, 2];
// function getElementsOneTime(arr) {
    
//     return arr.filter((element, index, array) => {
//         return array.indexOf(element) === array.lastIndexOf(element);
//     });
// }
// let  ty = getElementsOneTime(s);
// console.log(ty)


// 7
// let arr = [1, 2, 3, 3, 4, 4, 5]
// function removeConsecutiveDuplicates(arr) {
//     return arr.filter((item, index) => item !== arr[index - 1]);
// }
// console.log(removeConsecutiveDuplicates(arr));

// 8
// function removeElementsBetweenIndices(arr, k, m) {
//     arr.splice(k, m - k + 1);
//     console.log(arr.length, arr);
//     return arr;
// }
// console.log(removeElementsBetweenIndices([1, 2, 3, 4, 5, 6], 2,6))
// 9

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   for (let i = 0; i < books.length; i++) {
//     let kitob = books[i];
//     let natija = kitob.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}, ${kitob.author}ning "${kitob.title}" kitobi ${natija};`);
//   }
// 10
const products = [
    { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
    { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
    { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
    { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
    { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
  ];
  
  let son = 0
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i]
    const pulSom = product.price * (1 - product.discount / 100)
    const pul = pulSom * product.quantity
    son += pul
  }
  
  console.log(`jami pul: ${son} so'm`);


