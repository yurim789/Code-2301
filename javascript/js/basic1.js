let a = 100;
let b = '100';

let list = ['수박', '복숭아', '바나나', '사과'];
console.log(list[0]);
list.push('멜론');
console.log(list);
list.push('오렌지');

let dict = {
  'name' : 'Yurim',
  'height' : 161,
  'weight' : 49
}
console.log(dict);
console.log(dict['name']);
console.log(dict['height']);
console.log(dict['weight']);

let myEmail = 'jml990401@naver.com';
console.log(myEmail.split('@')[0])
console.log(myEmail.split('@')[1].split('.')[0])

function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(10, 5);
let result1 = sum(20, 30);
console.log(result);
console.log(result1);

// let age = prompt('나이를 입력하세요');

// if (age > 20) {
//   console.log('성인 입니다.')
// } else {
//   console.log('청소년 입니다.')
// }

let people = ['유림', '지후', '지혜', '원재', '현진']
console.log(people.length);

for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}