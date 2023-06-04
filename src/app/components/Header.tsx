import Link from "next/link"


export const Header = () => {
    console.log("suka")
    return (
        <header className="w-full flex justify-evenly items-center h-20 bg-slate-950">
            <Link  className="p-8 color text-gray-50 hover:underline decoration-white" href={'/about'}> About</Link>
            <Link  className="p-8 color text-gray-50 hover:underline decoration-white" href={'/blog'}>Blog</Link>
            <Link className="p-8 color text-gray-50 hover:underline decoration-white" href={'/'}>Home</Link>
        </header>
    )
}