import { UserInfo } from "./components/user-info";
import { logProps } from "./components/log-props";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper test={"test"} />
    </>
  );
}

export default App;
