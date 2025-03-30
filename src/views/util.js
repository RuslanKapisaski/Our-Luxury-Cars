import { render } from "./lib.js";

const userNav = document.querySelector(".user");
const guestNav = document.querySelector(".guest");
const welcomeMessage = document.querySelector(".welcome-message");

function setUserData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

function clearUserData() {
  localStorage.removeItem("user");
}

function hasOwner(ownerId) {
  const userData = getUserData();
  return ownerId === userData._id;
}

function checkForEmptyFields(data) {
  if (
    !data.imageUrl ||
    !data.price ||
    !data.weight ||
    !data.speed ||
    !data.about
  ) {
    return alert("All fields are required!");
  }
}

function createSubmitHandler(callback) {
  return function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    callback(data, e.target);
  };
}

function updateNav() {
  const userData = getUserData();
  if (userData) {
    guestNav.style.display = "none";
    userNav.style.display = "inline-block";

    welcomeMessage.textContent = `Welcome: ${userData.email}!`;
    welcomeMessage.style.color = "white";
  } else {
    guestNav.style.display = "inline-block";
    userNav.style.display = "none";
    welcomeMessage.textContent = "";
  }
  render("/");
}

export {
  setUserData,
  getUserData,
  hasOwner,
  clearUserData,
  createSubmitHandler,
  updateNav,
  checkForEmptyFields,
};
