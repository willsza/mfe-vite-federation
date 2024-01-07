import { BrowserRouter } from "react-router-dom";

import { Router } from "../../Routes";

export function Shell(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
