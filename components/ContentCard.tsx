// components/ContentCard.tsx
import Image from 'next/image';
import { ContentItem } from '../data/content';
import styles from './Content.module.css';

interface ContentCardProps {
  item: ContentItem;
}

export default function ContentCard({ item }: ContentCardProps) {
  return (
    <div className={styles.card}>
      <Image 
        src={item.thumbnail_url} 
        alt={item.title}
        width={400}
        height={225}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
        <div className={styles.cardButtonWrapper}>
          <a href={item.link_url} className={styles.cardButton} target="_blank">
            View Content
          </a>
        </div>
      </div>
    </div>
  );
}