import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="h-[calc(100vh-90px)] bg-white inline-block border-r-[1px] min-w-[200px]">
      <ul>
        <li>
          <Link className="p-3 border-b-[1px] block font-medium" to="/">
            › Home
          </Link>
        </li>
        <li>
          <Link
            className="p-3 border-b-[1px] block font-medium"
            to="/transfers"
          >
            › Transferências
          </Link>
        </li>
      </ul>
    </nav>
  );
}
