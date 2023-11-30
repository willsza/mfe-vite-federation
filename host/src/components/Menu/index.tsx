export function Menu() {
  return (
    <nav className="h-[calc(100vh-90px)] bg-white inline-block border-r-[1px] min-w-[200px]">
      <ul>
        <li>
          <a className="p-3 border-b-[1px] block font-medium" href="/">
            › Home
          </a>
        </li>
        <li>
          <a className="p-3 border-b-[1px] block font-medium" href="/transfers">
            › Transferências
          </a>
        </li>
      </ul>
    </nav>
  );
}
