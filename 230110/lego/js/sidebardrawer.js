const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

overlay.addEventListener('click', closeSidebar);



const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', toggleDrawerMenu);
})

$(function () {
  $(".gnb-nav-list> li").hover(function () {
    // sub menu가 보이게
    $(this).find("ul").stop().slideDown(500);
    $(this).children("a").addClass("on");
  }, function () {
    $(this).find("ul").stop().slideUp(500);
    $(this).children("a").removeClass("on");
 })
});