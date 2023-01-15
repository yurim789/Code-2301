let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
console.log(btn1, btn2, btn3);

btn1.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
})

btn2.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
})

btn3.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
})

$(function () {
  $(".gnb-list > li").hover(function () {
    // sub menu가 보이게
    $(".drop").find("ul").stop().slideDown(500);
    $(this).children("a").addClass("on");
  }, function () {
    $(".drop").find("ul").stop().slideUp(500);
    $(this).children("a").removeClass("on");
 })
});