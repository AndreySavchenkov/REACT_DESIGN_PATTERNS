import axios from "axios";
import { useDataSource } from "./data-source.hook";
import { useCallback } from "react";

const fetchFromServer = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  const fetchMessage = useCallback(getFromLocalStorage("msg"), []);

  const user = useDataSource(fetchUser);
  const message = useDataSource(fetchMessage);

  const { name, age, country, books } = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
