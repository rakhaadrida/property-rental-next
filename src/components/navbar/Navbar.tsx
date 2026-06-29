"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Brand from "../brand/Brand";
import Button from "../button/Button";
import { Fade } from "react-awesome-reveal";

const Navbar = (props: { isCentered?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Brand />

            <button
              className="navbar-toggler"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${open ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto">
                <li className={`nav-item${pathname === "/" ? " active" : ""}`}>
                  <Button className="nav-link" href="/" type="link">
                    Home
                  </Button>
                </li>
                <li
                  className={`nav-item${pathname === "/browse-by" ? " active" : ""}`}
                >
                  <Button className="nav-link" href="/browse-by" type="link">
                    Browse By
                  </Button>
                </li>
                <li
                  className={`nav-item${pathname === "/stories" ? " active" : ""}`}
                >
                  <Button className="nav-link" href="/stories" type="link">
                    Stories
                  </Button>
                </li>
                <li
                  className={`nav-item${pathname === "/agents" ? " active" : ""}`}
                >
                  <Button className="nav-link" href="/agents" type="link">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Navbar;
