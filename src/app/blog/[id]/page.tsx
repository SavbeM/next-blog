import {Post} from "../page";

type Props = {
    params: {
        id: string
    }
}



async function  getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

export default async function Posts({params: {id}}: Props) {
    const post: Post = await getPost(id)

    return (
        <div className="flex flex-col justify-center items-center">
            <span className="max-w-[400px] font-bold p-6 text-center">{post.title}</span>
            <span className="max-w-[600px]">{post.body}</span>
        </div>
    )
}