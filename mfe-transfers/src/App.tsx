import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Template } from "shared_app/Template";
import { Transfers } from "./components/Transfers";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"loading..."}>
        <Template>
          <Transfers />
        </Template>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
