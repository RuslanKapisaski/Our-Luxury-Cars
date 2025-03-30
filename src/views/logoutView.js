import { html, render, page } from "./lib.js";
import { updateNav } from "./util.js";
import * as userService from "../data/user.js";

export function logout() {
  userService.logout();
  updateNav();
  page.redirect("/");
}
