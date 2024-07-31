import Script from 'next/script';
import styles from './Contact.module.css';

const Contact = () => {

    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>Book a Free Call</h2>
            <div className={styles.sectionDescription}>
                <p>If you are a manager, executive, or an business owner, I will be happy to take a free 30 minute call. Let's go over your issues together, and discuss how I maybe able to help.</p>
            </div>
            <br />
            <div
                    className={`${styles.calendly} calendly-inline-widget`}
                    data-url="https://calendly.com/ashiina-biz/30min"
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
            <br />

            <h2 className={styles.title}>Contact</h2>
            <div className={styles.sectionDescription}>
                <p>If you have any questions, feel free to contact me here: <a href="">Contact Form</a></p>
            </div>
        </section>
    );
};

export default Contact;