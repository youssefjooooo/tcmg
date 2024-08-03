import Image from "next/image";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.expand}>
        <Image
          src="/assets/icons/HamburgerMenu-1.svg"
          alt="Logo"
          width={50}
          height={60}
        />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="كيف يمكنني مساعدتك ؟"
        />
        <div className={styles.lens}>🔎</div>
      </div>
      <div className={styles.selector}>
        <div>فروعنا</div>
        <div>@ AR</div>
      </div>
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo/Logo.svg"
          alt="Logo"
          width={170}
          height={60}
        />
      </div>
    </nav>
  );
}

export default Nav;
