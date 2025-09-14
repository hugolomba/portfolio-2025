import styles from './BlogSection.module.css';
import BlogPostCard from './BlogPostCard';
import Button from './Button';
import { Link } from 'react-router';

const blogPosts = [
    {
        title: "Understanding React Hooks",
        excerpt: "A deep dive into the world of React Hooks and how they can simplify your code.",
        date: "2023-10-01",
        link: "https://example.com/react-hooks",
        author: "Jane Doe"
    },
    {
        title: "A Guide to TypeScript",
        excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript code.",
        date: "2023-09-20",
        link: "https://example.com/typescript-guide",
        author: "John Smith"
    },
    {
        title: "CSS Grid vs Flexbox",
        excerpt: "When to use CSS Grid and when to use Flexbox for your layouts. lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ",
        date: "2023-09-15",
        link: "https://example.com/css-grid-vs-flexbox",
        author: "Alice Johnson"
    }
];



export default function BlogSection() {
    return (
        <section className={styles.blogSection} id="blog">
            <h2 className={styles.blogTitle}>Latest Blog Posts</h2>
            <div className={styles.blogPostsContainer}>
                {blogPosts.map((post, index) => (
                    <Link to={post.link} key={index}>
                        <BlogPostCard {...post} />
                    </Link>
                ))}
            </div>
            <Button btnType='link' href="/blog" >View All Posts</Button>
        </section>
    );
}