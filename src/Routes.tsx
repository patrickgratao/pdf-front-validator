import { NotFound } from "components/NotFound";
import { HomePage } from "pages/Home";
import { Switch, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Switch>
      <Route key={0} path="/" component={HomePage} exact />

      <Route key={11} path="" component={NotFound} />
    </Switch>
  );
}