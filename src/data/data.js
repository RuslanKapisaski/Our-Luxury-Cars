import { get, post, put, del } from "./api.js";
const endpoints = {
  allCars: "/data/cars?sortBy=_createdOn%20desc",
  addNewCar: "/data/cars",
  cars: "/data/cars",
};

async function getAllCars() {
  return await get(endpoints.allCars);
}
async function addCar(data) {
  return await post(endpoints.addNewCar, data);
}
async function editCar(id, data) {
  return await put(endpoints.cars + `/${id}`, data);
}
async function getCarById(id) {
  return await get(endpoints.cars + `/${id}`);
}
async function deleteCar(id) {
  return await del(endpoints.cars + `/${id}`);
}
async function searchCar(query) {
  return await get(
    `${endpoints.cars}?where=model%20LIKE%20%22${query}%22`
  );
}

export { getAllCars, addCar, editCar, getCarById, deleteCar, searchCar };
