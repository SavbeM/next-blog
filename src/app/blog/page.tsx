import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {Posts} from "../components/Posts";

export const metadata = {
    title: "Blog"
}

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

async function getMyPosts() {
    const response = await fetch("http://localhost:3004/posts")
    return response.json()
}


export default async function Blog() {

    const posts: Array<Post> = await getPosts()
    const myPosts: Array<Post> = await getMyPosts()

    return (
        <div className="flex justify-center flex-col p-8 lg:justify-evenly flex-row">
            <div className="flex flex-col justify-center pr-6">
            <div className="text-center font-bold text-xl">Users Posts</div>
                <Posts posts={posts}/>
            </div>
            <div className="flex flex-col  ">
                <div className="text-center font-bold text-xl">My Posts</div>
                <Posts posts={myPosts}/>
            </div>
        </div>
    )
}