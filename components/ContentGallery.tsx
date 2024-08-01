// components/ContentGallery.tsx
import { ContentItem } from '../data/content';
import ContentCard from './ContentCard';
import styles from './Content.module.css';

interface ContentGalleryProps {
  items: ContentItem[];
  title: string;
}

export default function ContentGallery({ items, title }: ContentGalleryProps) {
  return (
    <section className={styles.gallery}>
      <h2>{title}</h2>
      <div className={styles.galleryGrid}>
        {items.map((item, index) => (
          <ContentCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}