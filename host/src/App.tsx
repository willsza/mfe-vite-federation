import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Statement } from "statement_app/Statement";
import { Transfers } from "transfer_app/Transfers";
import { Shell } from "./components/Shell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Statement />,
  },
  {
    path: "/transfers",
    element: <Transfers />,
  },
]);

function App() {
  return (
    <Shell>
      <RouterProvider router={router} />
    </Shell>
  );
}

export default App;
