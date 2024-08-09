// app/page.tsx
import styles from './page.module.css';

import MyServices from '../components/MyServices';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContentGallery from '../components/ContentGallery';
import { videoItems, appearanceItems } from '../data/content';

export default function Home() {
  return (
    <div className={`${styles.container} montserrat-thin`}>

      <Header />

      <main>
        <div className={`spacer`}></div>

        <a id="top"></a>
        <Hero />

        <a id="services"></a>
        <MyServices />

        <a id="aboutme"></a>
        <AboutMe />

        <ContentGallery items={appearanceItems} title="Appearances" />

        <ContentGallery items={videoItems} title="Videos" />

        <a id="contact"></a>
        <Contact />

        <Footer />
      </main>

    </div>
  );
}
