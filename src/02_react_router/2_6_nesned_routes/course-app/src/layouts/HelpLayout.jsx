import { Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, optio
        eum quis, iure delectus atque corrupti dolores nam maxime quo officia
        repudiandae accusamus necessitatibus deserunt vel dolorem, fugiat ipsam
        molestias?
      </p>
      <nav>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
      </nav>
      <Outlet />
    </div>
  );
}
