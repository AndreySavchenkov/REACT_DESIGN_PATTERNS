import api from "./api";

const URLS = {
  fetchUsersUrl: "users",
};

export const fetchUsers = () => {
  return api.get(URLS.fetchUsersUrl, {
    baseUrl: "https://jsonplaceholder.typicode.com/",
  });
};
