import { Header } from "../Header";
import { Menu } from "../Menu";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-slate-100 flex">
        <Menu />
        {children}
      </main>
    </>
  );
}
