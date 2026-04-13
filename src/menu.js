function loadMenu() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  let text = document.createElement("div");
  text.textContent = "Walecome to menu";
  container.appendChild(text);
}
export default loadMenu;
