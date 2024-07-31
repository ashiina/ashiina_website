import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="#top">Top</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;