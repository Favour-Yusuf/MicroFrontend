import React from "react";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router/Routes";

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={mainRouter}></RouterProvider>
    </div>
  );
};

export default App;
