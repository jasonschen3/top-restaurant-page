const createMenu = () => {
  const $content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const menu = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "beef";
  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "turkey";
  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  pageContent.appendChild(menu);

  $content.appendChild(pageContent);
};

export default createMenu;
