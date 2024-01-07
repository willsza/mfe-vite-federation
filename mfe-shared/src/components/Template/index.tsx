import React, { Fragment } from "react";

import { Header } from "../Header";
import { Menu } from "../Menu";

export function Template({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main className="bg-slate-100 flex">
        <Menu />
        {children}
      </main>
    </Fragment>
  );
}
