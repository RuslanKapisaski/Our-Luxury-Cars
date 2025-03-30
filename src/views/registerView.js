import { html, render, page } from "./lib.js";
import { createSubmitHandler, updateNav } from "./util.js";
import * as userServise from "../data/user.js";

const temp = (handler) => {
  return html`
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${handler} class="register-form">
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
      </div>
    </section>
  `;
};

export function showRegisterView() {
  console.log("On register");
  render(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
  if (!data.email || !data.password || data.password !== data["re-password"]) {
    return alert("All field are required!");
  }
  await userServise.register(data.email, data.password);
  updateNav();
  page.redirect("/");
}
