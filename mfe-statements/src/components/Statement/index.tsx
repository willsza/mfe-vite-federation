import { useStore } from "host_app/store";

export function Statement() {
  const addToBalance = useStore(
    (state: { addToBalance: (amount: number) => void }) => state.addToBalance
  );

  return (
    <section className="justify-center p-8 flex-1">
      <h1 className="flex flex-col text-center">
        Statement
        <small className="text-[11px] font-semibold">
          (apps/mfe-statements)
        </small>
      </h1>

      <section className="text-center">
        <button
          className="bg-blue-600 text-white inline-block w-[200px] my-3 rounded py-3 px-4"
          onClick={() => {
            console.log("addToBalance");
            addToBalance(100);
          }}
          type="button"
        >
          Add 100
        </button>
      </section>
    </section>
  );
}
