import BasicLayout from "../layout/BasicLayout";
import Login from "../containers/Login";
import Demo from "../containers/Demo";
import NotFound from "../containers/NotFound";

interface Route {
  name: string;
  path: string;
  element: JSX.Element;
  auth: boolean;
}

interface routeLayout {
  path: string;
  element: JSX.Element;
  children?: Route[];
}

const routesData: routeLayout[] = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [{ name: "Demo", path: "/", element: <Demo />, auth: false }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routesData;
