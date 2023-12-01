import { useStore } from "shared_app/store";

export function Transfers() {
  const addToBalance = useStore(
    (state: { addToBalance: (amount: number) => void }) => state.addToBalance
  );

  return (
    <section className="justify-center p-8 flex-1">
      <h1 className="flex flex-col text-center">
        Transfers
        <small className="text-[11px] font-semibold">
          (apps/mfe-transfers)
        </small>
      </h1>

      <section className="text-center">
        <button
          className="text-white inline-block w-[200px] my-3 rounded py-3 px-4 bg-blue-600"
          onClick={() => addToBalance(300)}
        >
          Add 300
        </button>
      </section>
    </section>
  );
}
