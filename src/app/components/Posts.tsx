"use client"
import {Post} from "../blog/page";
import Link from "next/link";
import {useEffect, useState} from "react";



export const Posts = ({ posts }: { posts: Post[] }) => {
    const [portion, setPortion] = useState(5)

    useEffect(()=> {
    }, [posts, portion])

    const increasePortionValue = () => {
        if (posts.length > portion + 5){
            setPortion(portion + 5)
        }
        else{
            setPortion(portion + posts.length % portion)
        }

    }

    const renderPosts = () => {
        const postsToRender = posts.slice(0, portion);
        return postsToRender.map(post => (
            <li key={post.id}>
                <Link className="hover:underline" href={`blog/${post.id}`}>
                    {post.title}
                </Link>
            </li>
        ));
    };

    return(
        <>
            {renderPosts()}
            <button onClick={increasePortionValue}>...</button>
        </>
    )
}