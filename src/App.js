import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-wit-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      />
    </>
  );
}

export default App;
