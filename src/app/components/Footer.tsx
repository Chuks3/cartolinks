const Footer = () => {
    return (
        <footer className=" bg-black dark:bg-neutral-800 text-white">
            <div className="flex justify-between items-center mx-[30px] p-[0px] text-[30px]">
                <span className="flex gap-5 items-center cursor-pointer">
                    <img src="/images/logo.png" alt="logo" className="w-[50px] h-[50px] rounded-[10px]" />
                    <h2>Krea AI</h2>
                </span>
                <span className="flex items-center gap-[7px] cursor-pointer">
                    curated by
                    <img className="inline" src="https://img.icons8.com/?size=70&id=44916&format=png&color=ffffff" alt="icon" />
                    Mobbin</span>
            </div>
        </footer>
    )
}
export default Footer;