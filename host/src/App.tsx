import { Route, Routes } from "react-router-dom";

import { Statement } from "statement_app/Statement";
import { Transfers } from "transfer_app/Transfers";
import { Shell } from "./components/Shell";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Statement />} />
        <Route path="transfers" element={<Transfers />} />
      </Route>
    </Routes>
  );
}

export default App;
