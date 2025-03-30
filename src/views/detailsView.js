import { html, render, page } from "../../src/views/lib.js";
import * as dataService from "../data/data.js";
import * as utils from "./util.js";

const temp = (car, hasOwner) => {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${car.imageUrl} alt="example1" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">${car.price}</p>
            <p class="weight">${car.weight}</p>
            <p class="top-speed">${car.speed}</p>
            <p id="car-description">${car.about}</p>
          </div>
          <!--Edit and Delete are only for creator-->

          ${hasOwner
            ? html`
                <div id="action-buttons">
                  <a href="/edit/${car._id}" id="edit-btn"> Edit </a>
                  <a
                    href="#"
                    @click=${onDelete}
                    data-id=${car._id}
                    id="delete-btn"
                  >
                    Delete
                  </a>
                </div>
              `
            : " "}
        </div>
      </div>
    </section>
  `;
};

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const car = await dataService.getCarById(id);
  const hasOwner = utils.hasOwner(car._ownerId);
  render(temp(car, hasOwner));
}

async function onDelete(e) {
  e.preventDefault();
  const carId = e.target.dataset.id;
  const confirmResult = confirm("Are you sure you want to delete this record?");
  if (confirmResult) {
    await dataService.deleteCar(carId);
    page.redirect("/dashboard");
  }
}
