import React from "react";
import { Route, Routes } from "react-router-dom";

export const routerOutlet = (routes) => {
  const RouterOutlet = (props) => {
    return (
      <Routes>
        {Object.entries(routes).map(([routeName, route]) => {
          if (route.render && typeof route.render === "function") {
            return (
              <Route
                key={routeName}
                exact={route.exact}
                path={route.path}
                element={(_props) => {
                  return route.render({
                    ...props,
                    ..._props,
                    path: routeName,
                    routeData: route.data,
                  });
                }}
              />
            );
          } else {
            return (
              <Route
                key={routeName}
                exact={route.exact}
                path={route.path}
                element={
                  <route.component
                    {...props}
                    path={routeName}
                    routeData={route.data}
                  />
                }
              />
            );
          }
        })}
      </Routes>
    );
  };

  // set displayName
  RouterOutlet.displayName = "RouterOutlet";

  // set default props
  RouterOutlet.defaultProps = {};

  return RouterOutlet;
};
