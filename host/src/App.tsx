import React from "react";

import "./App.css";

import { Statement } from "statement_app/Statement";
import { Transfers } from "transfer_app/Transfers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </header>
      <React.Suspense fallback="Loading Statement...">
        <Statement />
      </React.Suspense>
      <React.Suspense fallback="Loading Transfers...">
        <Transfers />
      </React.Suspense>
    </div>
  );
}

export default App;
