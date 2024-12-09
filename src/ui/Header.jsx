import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="uppercase bg-yellow-500">
      <Link to="/" className="tracking-widest">
        {" "}
        Hot Pizza React{" "}
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
