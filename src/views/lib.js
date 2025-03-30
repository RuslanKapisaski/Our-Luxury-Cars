import {
  render as renderBase,
  html,
} from "../../node_modules/lit-html/lit-html.js";
import { classMap } from "../../node_modules/lit-html/directives/class-map.js";
import { styleMap } from "../../node_modules/lit-html/directives/style-map.js";
import page from "../../node_modules/page/page.mjs";

//TODO repcale with root element
const root = document.querySelector("main");

function render(template) {
  renderBase(template, root);
}

export { render, classMap, styleMap, page, html };
