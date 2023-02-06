let txt = document.querySelector('h1').innerHTML;
txt = 'Hello'
console.log(txt);

// null
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null값을 할당하는 것은 변수가 이전에 참조하던
// 값을 더이상 참조하지 않겠다는 의미
let name = 'yurim';
console.log(name);
name = null;
console.log(name);

// undefined
// 자바스크립트에서 var, let 키워드로 선언한 변수는
// 값이 들어오기 전까지 undefined 초기화 된다.
// 변수 선언에 의해 확보된 메모리 공간에 값이
// 할당되기 까지 undefined 상태
let a;
console.log(a);

// number
// NAN (Not a Number)
// Javascript는 대소문자를 구분

// String 문자, 문자열
// 1. 큰따옴표 ""
// 2. 작은 따옴표  ''
// 3. 역 따옴표(backtick) ``
let text1 = "hello1";
let text2 = "hello2";
let text3 = `hello3`;

let num = 10;
let text4 = `hello${num}`
console.log(text1, text2, text3);
console.log(text4);

// 형변환
console.log(Number('0'));
console.log(Number('123'));
// Not a Number
console.log(Number('Hello'));
console.log(Number('Hello123'));
// Boolean
console.log(Number(true));
// true는 숫자 1을 반환
console.log(Number(false));
// false 숫자 0을 반환

// 1. 정수(integer) int : 자연수와 0, 자연수에 마이너스를 붙인 숫자
// 2. 실수(real number) float이라는 명령어로 사용 
// floating point (부동 소수점) : 소수점이 있는 숫자

// 정수 변환 : parseInt
console.log(parseInt(123.24));
console.log(parseInt("123.24"));
// NaN
console.log(parseInt("sdfs"));

// 연산자
// 1. 산술 연산자 : +, -, /, *, %
console.log(30 + 10);
console.log(30 - 10);
console.log(30 * 10);
console.log(30 / 10);
// 나머지 연산자 : %
console.log(30 % 10);
// 거듭제곱 연산자 : **
console.log(30 ** 10);

// 2. 대입 연산자 : =, +=, -=
let num1 = 123;
let num2 = 456;
let str1 = "Hello";
let str2 = "World!";

let num3, str3;

num3 = num1 + num2;
str3 = str1 + str2;
console.log(num3)
console.log(str3)

let num4 = num1 - num2;
let str4 = str1 - str2;
console.log(num4);
console.log(str4);

// 자바스크립트는 동적언어라 변수 선언시 타입 지정 X
// 값이 할당되는 순간 그 값에 따라 타입이 결정됨
// 자바스크립트가 타입스크립트에 비해 자유도와 유연성 높다
// 1. 예상 못한 버그가 발생할 확률이 높다
// 2. 프로젝트 규모가 커질수록 유지보수 비용 증가, 안정성 저하

// let num(변수이름) = '숫자'; (자바스크립트)

// 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야하는지 명확하게 작성
// 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러 에러 발생 -> 사전에 빠른 대응 가능
// let num:number = '문자열'; (타입스크립트)
// 자신이 지정한 자료형하고 다른 값이 들어오면 에러 발생
// TypeScript 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어
// 자바스크립트에 타입을 부여한 언어 -> 자바스크립트 상위 버전

// 자바스크립트 대소문자 구분 0 소문자 a A
let A = '문자열';
let B = 12345;
let C = A + B;
let D = 20 - '10';
console.log(C, D);

// 3. 복합 대입 연산자
let Num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 10;
console.log(result_1, result_2, result_3, result_4, result_5);

// 복합 대입 연산자 +=
// result_1 = result_1 + Num
result_1 += Num;
console.log(result_1);

// 복합 대입 연산자 -=
// result_2 = result_2 - Num
result_2 -= Num;
console.log(result_2);