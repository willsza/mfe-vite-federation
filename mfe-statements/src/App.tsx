import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Template } from "shared_app/Template";
import { Statement } from "./components/Statement";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"loading..."}>
        <Template>
          <Statement />
        </Template>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
