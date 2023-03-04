import { RouterProvider } from "react-router-dom";
import { Provider as MobxProvider } from "mobx-react";

import { router } from "./routes";
import { stores } from "./stores";
import "./index.css";

const App = () => {
  return (
    <>
      <MobxProvider {...stores}>
        <RouterProvider router={router} />
      </MobxProvider>
    </>
  );
};

export default App;
