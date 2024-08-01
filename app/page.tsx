// app/page.tsx
import styles from './page.module.css';
import Image from 'next/image';

import MyServices from '../components/MyServices';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContentGallery from '../components/ContentGallery';
import { videoItems, articleItems } from '../data/content';

export default function Home() {
  return (
    <div className={`${styles.container} montserrat-thin`}>

      <Header />

      <main>
        <a id="top"></a>
        <div className={styles.spacer}></div>
        <section className={styles.hero}>
          <h1 className={styles.gradGreyLight}>Ahmad Shiina</h1>
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
              I am Your Fractional CTO: Here to Help Lead Your Tech Strategy, Projects, and Teams to Success.
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

        <a id="services"></a>
        <MyServices />

        <a id="aboutme"></a>
        <AboutMe />

        <ContentGallery items={videoItems} title="Videos" />
      
      {/*
        <ContentGallery items={articleItems} title="Articles" />
      */}

        <a id="contact"></a>
        <Contact />

        <Footer />
      </main>

    </div>
  );
}
