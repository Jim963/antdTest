import BasicLayout from "../layout/BasicLayout";
import Login from "../containers/Login";
import ForgotPassword from "../containers/ForgotPassword";
import Demo from "../containers/Demo";
import TablePage from "../containers/TablePage";
import Undone from "../containers/Undone";
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
    children: [
      { name: "展示頁面", path: "/demo", element: <Demo />, auth: false },
      {
        name: "Table頁面",
        path: "/tablePage",
        element: <TablePage />,
        auth: false,
      },
      {
        name: "未處理頁面",
        path: "/undone",
        element: <Undone />,
        auth: false,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const routeChineseName = routesData[0].children?.map((item: Route) => ({
  path: item.path,
  chName: item.name,
}));

export default routesData;
