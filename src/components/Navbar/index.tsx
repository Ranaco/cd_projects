import * as React from "react";
import "./index.css";
import { Link } from "react-router-dom";

interface NavbarLinksProps {
  link: string;
  title: string;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ link, title }) => {
  return (
    <Link className="nav-link" to={link}>
      {title}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const routes = [
    {
      link: "about",
      title: "About us",
    },
    {
      link: "platform",
      title: "Platform",
    },
    {
      link: "solution",
      title: "Solution",
    },
    {
      link: "customer",
      title: "Customer",
    },
    {
      link: "price",
      title: "Price",
    },
    {
      link: "contact",
      title: "Contact",
    },
    {
      link: "login",
      title: "Login",
    },
  ];
  return (
    <section className="nav-base" title="Navbar">
      <div className="nav-btn-group">
        {routes.slice(0, 4).map((val, index) => (
          <NavbarLinks link={val.link} title={val.title} key={index} />
        ))}
      </div>
      <div className="nav-logo">
        <img src="/images/logo.png" alt="Logo" /> 
        <span>Crypt land</span>
      </div>
      <div className="nav-btn-group">
        {routes.slice(4).map((val, index) => (
          <NavbarLinks link={val.link} title={val.title} key={index} />
        ))}
        <button className="nav-signup-btn">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Navbar;
