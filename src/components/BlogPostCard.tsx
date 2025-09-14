import styles from './BlogPostCard.module.css';

export default function BlogPostCard({ title, excerpt, date, author }: { title: string; excerpt: string; date: string; link: string; author: string }) {
    return (
        <div className={styles.blogPostCard}>
            <h3 className={styles.blogPostCardTitle}>{title}</h3>
            <p className={styles.blogPostCardExcerpt}>{excerpt}</p>
           <div className={styles.dateContainer}>
            <p className={styles.author}><img src="https://avatar.iran.liara.run/public/35" alt="Author" /> {author}</p>
            <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
           </div>
            
            {/* <a className={styles.blogPostLink} href={link} target="_blank" rel="noopener noreferrer">Read More</a> */}
        </div>
    );
}