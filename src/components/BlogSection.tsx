import styles from './BlogSection.module.css';
import BlogPostCard from './BlogPostCard';
import Button from './Button';
import { Link } from 'react-router';
import blogPosts from '../blogPosts';





export default function BlogSection() {
    const isHomePage = window.location.pathname === "/";
    
 

    return (
        <section className={styles.blogSection} id="blog">
            <h2 className={styles.blogTitle}>Latest Blog Posts</h2>
            <div className={styles.blogPostsContainer}>
                {blogPosts.map((post, index) => (
                    <Link to={`/blog/post/${index}`} key={index} onClick={() => window.scrollTo(0, 0)}>
                        <BlogPostCard {...post} />
                    </Link>
                ))}
            </div>
            {isHomePage && <Button btnType='link' href="/blog" >View All Posts</Button>}
        </section>
    );
}