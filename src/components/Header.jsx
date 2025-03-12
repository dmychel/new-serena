import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">New Serena</Link>
          </li>
          <div>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
