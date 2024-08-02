import React from 'react';
import styles from './MyServices.module.css';

const offerData = [
    {
        title: "Strategy Consultant",
        items: [
            "Provide executive-level strategies on engineering investments, business growth, and team management.",
            "Conduct and present research and proof-of-concepts to support strategic decision-making.",
        ],
        icon: <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />,
    },
    {
        title: "Agile Project Manager",
        items: [
            "Lead software development projects with a focus on Agile/Scrum methodologies.",
            "Mentor product managers and development teams in modern software development practices.",
        ],
        icon: <path d="M3 3h18v2H3V3zm0 4h6v14H3V7zm8 0h6v4h-6V7zm8 0h2v14h-2V7zm-8 6h6v8h-6v-8z" />,
    },
    {
        title: "Engineering Manager",
        items: [
            "Foster a high-performing engineering team, enhancing productivity, personal growth, and job satisfaction.",
            "Oversee communications and relationships with outsourced development firms to ensure seamless collaboration.",
        ],
        icon: <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />,
    },
    {
        title: "Recruitment Consultant",
        items: [
            "Advise on optimal headcount, effective hiring strategies, and outreach methods.",
            "Conduct thorough hiring interviews to identify top talent.",
            "Craft compelling job descriptions and outreach messages to attract the best candidates.",
        ],
        icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
    },
];

const industryData = [
    {
        title: "E-commerce",
        backgroundImage: "/industries/ecommerce.jpg",
    },
    {
        title: "Mobile Apps",
        backgroundImage: "/industries/mobileapp.jpg",
    },
    {
        title: "B2B SaaS",
        backgroundImage: "/industries/b2bsaas.jpg",
    },
    {
        title: "AI/ML",
        backgroundImage: "/industries/aiml.jpg",
    },
];

const MyServices: React.FC = () => {
    return (
        <section className={styles.offersSection}>
            <h2>What I Offer</h2>
            <div className={`${styles.offerCard} ${styles.singleOffer} gradBlueLight`}>
                <h3 className={styles.offerTitle}>Fractional CTO</h3>
                <p className={styles.offerDescription}>
                    As a Fractional (part-time) CTO, I will provide executive-level support around everything technology and engineering related. I offer flexible support around <span className={`strong`}>all of the areas below</span> as we identify strategies and issues together.
                </p>
            </div>

            <div className={styles.offersGrid}>
                {offerData.map((offer, index) => (
                    <div key={index} className={styles.offerCard}>
                        <div className={styles.offerHeader}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.offerIcon}>
                                {offer.icon}
                            </svg>
                            <h3 className={styles.offerTitle}>{offer.title}</h3>
                        </div>
                        <ul className={styles.offerList}>
                            {offer.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2>Areas/Industries</h2>
            <div className={styles.sectionDescription}>
                <p>I have strong expertise in the areas/industries below - though I am comfortable helping companies in other industries also.</p>
            </div>
            <div className={styles.offersGrid}>
                {industryData.map((ind, index) => (
                    <div key={index} className={`${styles.indCard} gradBlueLight`}
                        style={{
                            backgroundImage: `url(${ind.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className={styles.darkBlurOverlay}>
                            <h3 className={styles.offerTitleOnly}>
                                {ind.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyServices;