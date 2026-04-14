function loadContact() {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  let form = document.createElement("form");
  let email = document.createElement("input");
  email.placeholder = "Your email";
  email.type = "email";
  let message = document.createElement("textarea");
  message.placeholder = "Write your message";
  let submit = document.createElement("input");
  submit.type = "submit";
  form.append(email, message, submit);
  container.appendChild(form);
}
export default loadContact;
