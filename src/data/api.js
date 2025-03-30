import { getUserData, clearUserData } from "../views/util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const responce = await fetch(host + url, options);
    const ulr = host + url;

    if (!responce.ok) {
      const error = await responce.json();

      if (responce.status == 403 && error.message == "Invalid access token") {
        clearUserData();
      }

      throw new Error(error.message);
    }

    if (responce.status == 204) {
      return responce;
    } else {
      return responce.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);
