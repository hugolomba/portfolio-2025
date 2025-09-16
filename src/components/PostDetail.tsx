

import styles from './ProjectDetail.module.css'
import { useParams } from "react-router-dom";
import blogPosts from "../blogPosts";

import type { FC, JSX } from "react";
import MoreProjects from './MoreProjects';



interface ProjectType {
    title: string;
    images: string[];
    technologies: string[];
    longDescription: string;
    github: string;
    link: string;
}

export default function PostDetail(): JSX.Element   {
const { id } = useParams<{ id: string }>();

const post = blogPosts.find(p => p.id === id);

console.log("Post:", post);

    if (!post) {
        return <h2>Post not found</h2>;
    }



    return (
        <div className={styles.projectDetailContainer}>
            <h1>{post.title}</h1>

       

        

        

            {/*
            <Button btnType='link' href={`/project/${nextProject.id}`}>Next Project: {nextProject.title}</Button>
            */}
            <div className={styles.moreProjectsContainer}> 
            <h2>More Posts</h2>
            <div className={styles.moreProjectsCards}>
            {blogPosts.map(p => (
                p.id !== post.id && (
                   <MoreProjects key={p.id} id={p.id} title={p.title} />
                )
            ))} 
            </div>
            </div>  
        </div>
    );
};

