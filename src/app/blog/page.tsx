import Link from "next/link";

export const metadata = {
    title: "Blog"
}

export type Post = {
    userId: number,
    id: number,
    title: string, p
    body: string
}

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}


export default async function Blog() {

    const posts: Array<Post> = await getData()
    return (
        <div className="flex justify-center p-8">
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link className="hover:underline" href={`blog/${post.id}`}>{post.title}</Link>
                        </li>)
                })}
            </ul>
        </div>
    )
}