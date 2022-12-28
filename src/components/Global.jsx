import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Main } from "../pages/Main";
import { Places } from "../pages/Places";
import { Users } from "../pages/Users";
import * as Router from "../router";
import * as UAnalytics from "../gtm";

export const Global = () => {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    console.log("UA tracking", location.pathname);
    UAnalytics.trackPage({
      path: location.pathname,
      title: Router.titles[location.pathname],
    });
  });
  return (
    <div>
      <Routes>
        <Route path={Router.path.home} element={<Main />} exact />
        <Route exact path={Router.path.users} element={<Users />} />
        <Route path={Router.path.places} element={<Places />} />
      </Routes>
    </div>
  );
};
