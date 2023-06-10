'use client'
import {useState} from "react";
import axios from "axios";

export default function AddPost() {
    const [postText, setPostText] = useState("")
    const [title, setTitle] = useState('')

    const addPost = async () => {
        try {
            const req = await axios.post("http://localhost:3004/posts", {
                userId: 122210123,
                id: new Date().toString(),
                title: title,
                body: postText
            })
                console.log(req.status)


        } catch (e) {
            console.log(e)
        }

    }

    const textareaStyle = `min-h-[80%] m-6 text-start placeholder:text-xl placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pl-2 pt-2`;
    const inputStyle = `text-start mt-6 placeholder:text-xl placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 pl-2 pt-2`;
    const buttonStyle = "text-stone-50 mt-4 p-2 rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"

    return (
        <div className="flex flex-col justify-center w-[1200px] items-center  max-h-[800px] m-6">
            <input onChange={(text) => setTitle(text.target.value)} className={inputStyle} type="text"
                   placeholder="Insert post title..." maxlength="10"/>
            <textarea onChange={(text) => setPostText(text.target.value)} className={textareaStyle}
                      placeholder="Write your new post..."/>
            <button onClick={addPost} n
                    className={buttonStyle}>Add
                new post
            </button>
        </div>
    )
}