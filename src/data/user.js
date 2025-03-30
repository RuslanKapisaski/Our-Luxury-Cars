import { get, post } from "./api.js";
import { clearUserData, setUserData } from "../views/util.js";

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

async function login(email, password) {
  const result = await post(endpoints.login, { email, password });
  setUserData({
    _id: result._id,
    email: result.email,
    accessToken: result.accessToken,
  });
}

async function register(email, password) {
  const result = await post(endpoints.register, { email, password });
  setUserData({
    _id: result._id,
    email: result.email,
    accessToken: result.accessToken,
  });
}

async function logout() {
  const promise = get(endpoints.logout);
  clearUserData();
  await promise;
}

export { login, register, logout };
