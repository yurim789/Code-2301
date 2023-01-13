// 가능한 슬라이드 0 1 2 3
// 개수        4개
// 첫번째번호   0
// 마지막번호   개수-1




//정해진 범위 안에서만 순환하는 알고리즘
// 타이밍 - 때 - 언제냐

// 현재 우리가 보고있는 슬라이드의 번호
// current = 0

// #next-btn을 눌렀을 때
// 이러한 일이 벌어질 것이다.
  // current를 1증가시키자
  // 만약 그렇게 증가된 current가 4이상인가?
    // current를 강제로 0으로 바꿔치기
  // 모든 .slide를 서서히 숨겨버리자
  // .slide중에 current번째(이번에 보여줄 슬라이드)를 서서히 보여주자

var current = 0;
var count = $(".slide").length;

function nav(dir){
  current = current + dir;
  if(current >= count){
    current = 0;
  }else if(current  < 0){
    current = count-1;
  }
  $(".slide").fadeOut();
  $(".slide").eq(current).fadeIn();
}

$("#next-btn").click(function(){
  nav(1);
});

$("#prev-btn").click(function(){
  nav(-1);
})
 

// $("#next-btn").click(function(){
//   current++;
//   if(current >= 4){
//     current = 0;
//   }
//   $(".slide").fadeOut();
//   $(".slide").eq(current).fadeIn();
// });

// $("#prev-btn").click(function(){
//   current--;
//   if(current < 0){
//     current = 3;
//   }
//   $(".slide").fadeOut();
//   $(".slide").eq(current).fadeIn();
// });

// setTimeout(function(){
//   alert("코딩 글자수가 몇개?");
// }, 3000);

setInterval(function(){
  nav(1);
}, 3000);