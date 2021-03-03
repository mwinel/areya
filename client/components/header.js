import Link from "next/link";

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand font-weight-bold">TicketingApp</a>
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center font-weight-bold">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
