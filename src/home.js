function loadHome() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  let text = document.createElement("div");
  text.textContent = "Walecome to homepage";
  container.appendChild(text);
}
export default loadHome;
