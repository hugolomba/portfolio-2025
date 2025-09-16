

import styles from './ProjectDetail.module.css'
import { useParams } from "react-router-dom";
import blogPosts from "../blogPosts";

import type { JSX } from "react";


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
      <p className={styles.meta}>
        {post.date} • By {post.author}
      </p>
      <p className={styles.excerpt}>{post.excerpt}</p>

      <a href={post?.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
        Visit Project
      </a>
    </div>
    );
};

