// 이벤트 객체 -> 전송 이벤트를 막는 기능
$('#submit-btn').on('click', function(e) {
  
  let idBox = $('#id-box').val();
  let pwBox = $('#pw-box').val();

  console.log(idBox, pwBox);

  // if (idBox == '' && pwBox == '') {
  //   alert('아이디와 비밀번호를 입력하세요.')
  //   e.preventDefault();
  // } else if (idBox == '') {
  //   alert('아이디를 입력하세요.')
  //   e.preventDefault();
  // } else if (pwBox == '') {
  //   alert('비밀번호를 입력하세요.')
  //   e.preventDefault();
  // }

  if (idBox == '' && pwBox == '') {
    
  }
});




// // 조건문
// if(조건) {
//   // 실행할 코드
// }

// if(10 == 1) {
//   console.log('정답 아닙니다.')
// } else if(10 != 1) {
//   console.log('정답');
// }

// if(조건) {

// } else if(또 다른 조건) {

// }

// 비교연산자
// A > B : A가 B보다 크다
// A >= B : A가 B보다 크거나 같다
// A < B : A가 B보다 작다
// A <= B : A가 B보다 작거나 같다
// A == B : A와 B가 같다 / 데이터만 일치해도 true / 느슨한 비교
// A != B : A와 B가 같지않다 / 느슨한 비교
// A === B : A와 B가 같다 / 데이터랑 형 모두 일치해야 true / 엄격한 비교
// A !== B : A와 B가 같지않다/ 데이터랑 형 모두 불일치해야 true / 느슨한 비교


if(3 === '3') {
  console.log('같다')
} else {
  console.log('같지않다')
}

// 논리연산자
// 1. A || B : or A조건 또는 B조건 둘 중 하나 일치할 때
// 2. A && B : and A조건 또는 B조건 둘 다 일치할 때
// 3. ! : not 논리부정
//  (조건) 10과 1은 같다 -> 논리부정 / 10과 1은 같지 않다
if(!(10 == 1)) {
  console.log('참')
} else {
  console.log('거짓')
}