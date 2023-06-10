"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type PagesType = {
    link: string;
    name: string;
};

export const HeaderNavigation = () => {
    const pages: Array<PagesType> = [
        { link: "/about", name: "About" },
        { link: "/blog", name: "Blog" },
        { link: "/", name: "Home"},
        {link: "/add-post", name: "Add Post" },
    ];
    const defaultStyle = "p-8 text-white hover:underline decoration-white";
    const isActiveStyle = "p-8 text-indigo-500 hover:underline decoration-white";
    const pathname = usePathname();
    return (
        <>
            {pages.map((page) => (
                <div key={page.link}>
                    <Link href={page.link}>
                        <span className={pathname === page.link ? isActiveStyle : defaultStyle}>
                            {page.name}
                        </span>
                    </Link>
                    <div />
                </div>
            ))}
        </>
    );
};