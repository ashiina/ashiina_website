import React from 'react';
import Image from 'next/image';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
    return (
        <section className={styles.aboutMe}>
            <h2>About Me</h2>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                <Image
                                src="/prof_long.jpg"
                                alt="Profile"
                                width={400}
                                height={400}
                            />
                </div>
                </div>
                <div className={styles.profileInfo}>
                    <p>
                        I co-founded and have been running a startup for over 10 years. From its nascent stages to its current scale of 60+ employees, I've been instrumental in its growth. In the early days, I architected and developed the core backend using AWS, Node.js, Golang.
                    </p>
                    <p>
                        Now, I wear multiple hats — from leading a product and engineering team, overseeing hiring, management, and development, to managing an entire business division and being responsible for the P/L. Currently I am also leading AI development, writing code alongside other developers.
                    </p>
                    <p>
                        In addition to my role as CTO, I also serve as an advisor and consultant for multiple companies, helping CEOs run effective engineering teams and create successful IT strategies.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/ahmad-shiina-73608a41/" target="_blank" rel="noopener noreferrer" className={`${styles.iconLink}  gradBlueLight`}>
                            <Image
                                src="/linkedin-icon.svg"
                                alt="LinkedIn"
                                width={50}
                                height={50}
                                className={styles.icon}
                            />
                        </a>
                        <a href="https://www.youtube.com/@Shiina-AI" target="_blank" rel="noopener noreferrer" className={`${styles.iconLink}  gradBlueLight`}>
                        <Image
                                src="/youtube-icon.svg"
                                alt="YouTube"
                                width={50}
                                height={50}
                                className={styles.icon}
                            />
                        </a>
                        <a href="https://a-shiina.medium.com/" target="_blank" rel="noopener noreferrer" className={`${styles.iconLink}  gradBlueLight`}>
                        <Image
                                src="/medium-icon.svg"
                                alt="Medium"
                                width={50}
                                height={50}
                                className={styles.icon}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;