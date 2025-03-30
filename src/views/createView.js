import { addCar } from "../data/data.js";
import { html, page, render } from "./lib.js";
import { checkForEmptyFields, createSubmitHandler } from "./util.js";

const temp = (handler) => {
  return html` <section id="create">
    <div class="form form-auto">
      <h2>Share Your Car</h2>
      <form @submit="${handler} " class="create-form">
        <input type="text" name="model" id="model" placeholder="Model" />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>`;
};

export function showCreateView() {
  render(temp(createSubmitHandler(onSubmit)));
}

async function onSubmit(data, formRef) {
  checkForEmptyFields(data);
  await addCar(data);
  page.redirect("/dashboard");
}
