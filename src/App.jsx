import { useRoutes } from "react-router-dom";
import routes from "./router/index";
import { getUserToken } from "./utils/handleUserToken";

function App() {
  const userToken = getUserToken();
  console.log(userToken, "userToken");
  const routeElement = useRoutes(routes(userToken));

  return (
    <div className="App w-screen h-screen text-[#484848]">{routeElement}</div>
  );
}

export default App;
