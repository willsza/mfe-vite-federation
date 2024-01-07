import { Outlet, Route, Routes } from "react-router-dom";

import { Template } from "shared_app/Template";
import { Statement } from "statement_app/Statement";
import { Transfers } from "transfer_app/Transfers";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Template>
            <Outlet />
          </Template>
        }
      >
        <Route index element={<Statement />} />
        <Route path="transfers" element={<Transfers />} />
      </Route>
    </Routes>
  );
}
