import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <div>Unique</div>
      <div className={styles.rightBar}>
        <a href="/products">Products</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
