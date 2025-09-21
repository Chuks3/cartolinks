"use client";

import { useTheme } from "next-themes";

const NavBar = () => {
    const {theme, setTheme} = useTheme()

    return (
        <nav className="bg-neutral-100 sticky top-[0] z-30">
            <div className="flex justify-between items-center py-[3px] mx-[30px]">
                <div className="flex gap-[25px] items-center">
                    <img src="/images/logo.png" alt="logo" className="w-[50px] h-[50px] cursor-pointer" />
                    <span className="flex gap-[20px] items-center">
                        <img src="https://maxst.icons8.com/vue-static/icon/svg/accordionEditor%D0%A1olor.svg" alt="icon" />
                        <p className="cursor-pointer text-black">benevolentnimbobon</p>
                        <img className="cursor-pointer" src="https://img.icons8.com/?size=20&id=45330&format=png&color=000000" alt="icon" />
                    </span>
                </div>
                <div className="flex gap-[25px] items-center bg-gray-200 rounded-[10px] py-[5px] px-[10px] cursor-pointer">
                    <img className="bg-white py-[7px] px-[10px] rounded-[10px]" src="https://img.icons8.com/?size=25&id=72&format=png&color=000000" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=TXu8dnb62RkC&format=png&color=000000" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=YBbnkrKZzSkQ&format=png&color=000000" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=55847&format=png&color=000000 " alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=55847&format=png&color=000000" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=4798&format=png&color=000000" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=82843&format=png&color=000000" alt="icon" />
                </div>
                <div className="flex justify-between gap-[20px] items-center">
                    <span className="flex gap-[10px] items-center bg-gray-200 rounded-[10px] py-[5px] px-[10px] text-black cursor-pointer">
                        <img src="https://img.icons8.com/?size=25&id=TXu8dnb62RkC&format=png&color=000000" alt="icon" />
                        Gallery
                    </span>
                    <span className="flex gap-[10px] items-center bg-gray-200 rounded-[10px] py-[5px] px-[10px] text-black cursor-pointer">
                        <img src="https://img.icons8.com/?size=25&id=53278&format=png&color=000000" alt="icon" />
                        Support
                    </span>
                    <img src="https://img.icons8.com/?size=25&id=49387&format=png&color=000000" className="bg-gray-200 rounded-[10px] py-[5px] px-[10px] cursor-pointer" alt="icon" />
                    <img src="https://img.icons8.com/?size=25&id=43884&format=png&color=000000" className="bg-gray-200 rounded-[10px] py-[5px] px-[10px] cursor-pointer" alt="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
                    <img src="https://maxst.icons8.com/vue-static/icon/svg/accordionEditor%D0%A1olor.svg" className="cursor-pointer" alt="icon" />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;