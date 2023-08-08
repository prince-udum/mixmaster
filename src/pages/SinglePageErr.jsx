import React from "react";
import { useRouteError } from "react-router-dom";

const SinglePageErr = () => {
  const error = useRouteError();
  return <h2>{error.message}</h2>;
};

export default SinglePageErr;
