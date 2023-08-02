import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import { getUserToken } from "./utils/handleUserToken";
import FixedBtnRow from "./components/FixedBtnRow";

function App() {
  const userToken = getUserToken();
  console.log(userToken, "userToken");
  const routeElement = useRoutes(routes(userToken));

  return (
    <>
      <div className="App w-screen min-h-screen text-[#484848]">
        {routeElement}
        <FixedBtnRow></FixedBtnRow>
      </div>
    </>
  );
}

export default App;
