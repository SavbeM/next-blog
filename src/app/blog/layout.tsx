import {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: 'Blogs',
}

export default function BlogLayout({children,}: {
    children: React.ReactNode
}){
    return(
        <div className="container">
            {children}
        </div>
    )
}