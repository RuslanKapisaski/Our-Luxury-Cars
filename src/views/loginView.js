import { html, render, page } from "../../src/views/lib.js";
import { createSubmitHandler, updateNav } from "./util.js";
import * as userService from "../data/user.js";

const temp = (handler) => {
  return html`
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form @submit=${handler} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </section>
  `;
};

export function showLoginView(data) {
  render(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
  if (!data.email || !data.password) {
    return alert("All fields are required");
  }
  await userService.login(data.email, data.password);
  updateNav();
  page.redirect("/");
}
