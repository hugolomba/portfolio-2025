

import styles from './PostDetail.module.css'
import { useParams } from "react-router-dom";
import blogPosts from "../blogPosts";
import ProjectCarousel from './ProjectCarousel';

import type { JSX } from "react";
import ReactMarkdown from 'react-markdown';


export default function PostDetail(): JSX.Element   {
const { id } = useParams<{ id: string }>();

const post = blogPosts.find(p => p.id === id);

console.log("Post:", post);

    if (!post) {
        return <h2>Post not found</h2>;
    }
    return (
      <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.authorContainer}>
        <img src={post.authorImage} alt={post.author} className={styles.authorImage} />
        <div className={styles.authorInfo}>
        <span className={styles.authorName}>{post.author}</span>
        <span className={styles.postDate}>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
      {/* <ProjectCarousel projectImages={post.images} /> */}
      <div className={styles.contentContainer}
      dangerouslySetInnerHTML={{ __html: post.content }}>
      
      
      </div>
  
    </div>
    );
};

