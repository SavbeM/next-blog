import React from "react";
import {Metadata} from "next";
import About from "./page";

export const metadata: Metadata = {
    title: 'About',
}

export default function AboutLayout({children,}: {
    children: React.ReactNode
}){
    return(
        <div className="container">
            {children}
        </div>
    )
}