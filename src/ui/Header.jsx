import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 font-medium uppercase bg-yellow-400 border-b font-pizza sm:px-6 border-stone-200">
      <Link to="/" className="tracking-widest">
        {" "}
        Hot Pizza Online CO.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
