let hello = document.getElementById('hello').innerHTML = 'Hi';
document.getElementById('hello').style.color= "red";
document.getElementById('hello').style.fontSize= "50px";
console.log(hello);

// document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!';


//내가한거
// let box = document.querySelector('.close-btn');
// console.log(box);

// box.addEventListener('click', function() {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!';
// })


// //쌤이한거
// let btn = document.querySelector('.close-btn')

// // 콜백함수
// btn.addEventListener('click', function() {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!';
// })

//정석
// function 감자() {
//   document.getElementById('js').innerHTML = '자바스크립트 너무 재밌어요!';
// }

let closeBtn = document.querySelector('.close-btn');
let openBtn = document.querySelector('.open-btn');
console.log(closeBtn, openBtn)

function openBox() {
  // openBtn을 클릭 했을 때 .box-wrapper의 display 속성을 block으로 바꿔준다
  document.querySelector('.box-wrapper').style.display = 'block';
}
// openBtn.addEventListener('click', openBox);

function closeBox() {
  // closeBtn을 클릭 했을 때 .box-wrapper의 display를 none으로 바꿔준다
  document.querySelector('.box-wrapper').style.display = 'none';
}
// closeBtn.addEventListener('click', closeBox);

// openBtn.addEventListener('click', function() {
//   document.querySelector('.box-wrapper').style.display = 'block';
// })
// closeBtn.addEventListener('click', function() {
//   document.querySelector('.box-wrapper').style.display = 'none';
// })

function Box(display) {
  document.querySelector('.box-wrapper').style.display = display;
}


