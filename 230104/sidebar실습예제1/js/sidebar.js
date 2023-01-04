//변수명은 낙타표기법으로 작성한다.
 
const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

console.log(sidebarMenuButton, sidebar, sidebarOverlay);

function openSidebar() {
  // 하고싶은 일을 코드로 작성
  // 사이드바, 오버레이가 보이게 하고싶음
  // is-active라는 클래스가 추가되면 보이고 제거되면 사라진다.
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click',openSidebar);

function closeSidebar() {
  //overlay를 클릭했을때 is-active라는 클래스를 제거
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click',closeSidebar);

