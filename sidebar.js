function toggleSidebarMenu(callback) {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");

  callback();
}

function changeSidebarMenu() {
  const sidebarMenu = document.querySelector(".sidebar-menu");
  sidebarMenu.classList.toggle("active");
}
