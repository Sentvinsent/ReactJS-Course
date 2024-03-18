import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackgorund from "./main-header-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <MainHeaderBackgorund />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Food app logo image" priority />
          Next level food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
