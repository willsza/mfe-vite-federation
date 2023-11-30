import { useStore } from "../../store";
import { IconUser } from "../IconUser";

export function Header() {
  const user = useStore((state) => state.user);

  return (
    <header className="flex justify-between items-center shadow-lg p-4 border-b-[1px]">
      <section>
        <h1>Header</h1>
        <small className="text-[11px] font-semibold">(packages/ui)</small>
      </section>

      <section className="flex gap-2 items-center">
        <span className="mr-10">
          Saldo: <b>100</b>
        </span>
        <button className="btn btn-primary" type="button">
          <IconUser className="h-5 w-5" />
        </button>
        {user}
      </section>
    </header>
  );
}
