import axios from "axios";
import { BookInfo } from "./components/book-info";
import { CurrentUserLoader } from "./components/current-user-loader";
import { DataSource } from "./components/data-source";
import { ResourceLoader } from "./components/recource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";
import { async } from "q";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
