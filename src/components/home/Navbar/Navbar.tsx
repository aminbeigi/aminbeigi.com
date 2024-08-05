import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../../utils";
import { Link } from "react-router-dom";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        aminbeigi.com
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
