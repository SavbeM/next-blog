import {HeaderNavigation} from "./HeaderNavigation";

export const Header = () => {
    console.log("suka")
    return (
        <header className="w-full flex justify-evenly items-center h-20 bg-slate-950">
            <div className="text-white font-bold">Logo</div>
            <HeaderNavigation/>
        </header>
    )
}