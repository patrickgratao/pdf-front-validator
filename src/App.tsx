// import { BrainzAuthContextProvider } from "@brainz_group/webappframeworkvite";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

import "./global.css";

export const App = () => {
  return (
    // <BrainzAuthContextProvider waitAuthentication={true}>
    <Router>
      <AppRoutes />
    </Router>
    // </BrainzAuthContextProvider>
  );
};
