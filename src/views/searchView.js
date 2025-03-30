import { render, html } from "./lib.js";
import * as dataService from "../data/data.js";
import { createSubmitHandler } from "./util.js";

const temp = (handler, results) => {
  return html`    </section>
    <!-- Search page -->
    <section id="search">
      <div class="form">
        <h4>Search</h4>
        <form @submit = ${handler} class="search-form">
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>
     ${renderResults(results)}
    </section>`;
};

function renderResults(results) {
  if (!results) {
    return "";
  } else if (results.length === 0) {
    return html` <div class="search-result">
      <h2 class="no-avaliable">No result.</h2>
    </div>`;
  }
  return results.map((car) => {
    return html`<div class="car">
          <img src=${car.imageUrl} alt="example1" />
          <h3 class="model">${car.model}</h3>
          <a class="details-btn" href=/details/${car._id}>More Info</a>
        </div>`;
  });
}

export function showSearchView() {
  render(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, tableRef) {
  if (!data.search) {
    return alert("All fields are required!");
  }
  const result = await dataService.searchCar(data.search);
  render(temp(createSubmitHandler(onSubmit), result));
}
