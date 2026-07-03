import styles from "./Navbar.module.css";


function Navbar(){
    return(
        <header className={styles.navbar}>
            <h2 className={styles.logo}>Ashen Trail</h2>

            <nav className={styles.menu}>
                <a href="#">Home</a>
                <a href="#">Classes</a>
                <a href="#">News</a>
                <a href="#">Discord</a>
            </nav>
        </header>
    )
}

export default Navbar;