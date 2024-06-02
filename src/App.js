import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-wit-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSourceWithRender
        getData={() => getDataFromLocalStorage("test")}
        render={(resource) => <Message msg={resource} />}
      />
    </>
  );
}

export default App;
