import { RouteObject, Navigate } from "react-router-dom";
import pathData from "./pathData";

const Router: (userToken?: string | null) => RouteObject[] = (userToken) =>
  pathData.map((layoutRoute) => {
    return {
      ...layoutRoute,
      children: layoutRoute?.children?.map((childRoute) => ({
        path: childRoute.path,
        element:
          childRoute.auth && !userToken ? (
            <Navigate to="/login" />
          ) : (
            childRoute.element
          ),
      })),
    };
  });

export default Router;
