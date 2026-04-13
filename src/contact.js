function loadContact() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  let text = document.createElement("div");
  text.textContent = "Walecome to contact";
  container.appendChild(text);
}
export default loadContact;
