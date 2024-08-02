import styles from './Footer.module.css'; // Adjust the path as necessary

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>© 2024 Ahmad Shiina</p>
            </div>
            <div className={`spacer`}></div>
        </footer>
    );
};

export default Footer;