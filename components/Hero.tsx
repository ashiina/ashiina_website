import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={`gradGreyLight`}>Ahmad Shiina</h1>
            <div className={styles.heroContent}>
                <div className={styles.avatars}>
                    <div className={styles.avatar}>
                        <Image
                            src="/prof_tmb.jpg"
                            alt="Profile image"
                            width={480}
                            height={480}
                        />
                    </div>
                </div>
                <div className={styles.tagAndCTA}>
                    <p>
                    Tech strategy, management, and hiring expert. Let’s make your tech work for you.
                    </p>
                    <a href="#contact">
                        <button className={styles.letsTalk}>
                            <span>Book a Free Call</span>
                            <div className={styles.divider}></div>
                            <span className={styles.phoneIcon}>📞</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Hero;