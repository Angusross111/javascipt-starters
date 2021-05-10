import React from "react";
import { useRoutes,} from "react-router-dom";
import routes from "./Routes";


function App() {
  let routing = useRoutes(routes);
  return routing
}
export default App