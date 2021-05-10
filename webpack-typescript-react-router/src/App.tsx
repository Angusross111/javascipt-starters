import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./Routes";

function App() {
  return (
   <Router>
     <RoutePaths />
   </Router>
  );
}

export default App