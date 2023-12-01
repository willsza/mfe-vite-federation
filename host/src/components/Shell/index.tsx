import { Outlet } from "react-router-dom";

import { Header } from "../Header";
import { Menu } from "../Menu";

export function Shell(): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-slate-100 flex">
        <Menu />
        <Outlet />
      </main>
    </>
  );
}
