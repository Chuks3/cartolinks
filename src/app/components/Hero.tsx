const Hero = () => {
    return (
        <section className="my-[80px] mx-[30px] w-[97%] overflow-hidden">
            <div className="flex gap-10 w-[2000px]">
                <div className="flex items-center justify-center relative text-white">
                    <img className="w-[100%] brightness-[60%] rounded-[30px]" src="https://i.ytimg.com/vi/9mm5uSLl1Bs/maxresdefault.jpg" alt="image"/>
                    
                    <h1 className="absolute top-[25%] text-[100px] font-extrabold">WAN 2.2</h1>
                    <div className="absolute bottom-[0] left-[0] mx-[40px] mb-[40px]">
                        <h3 className="text-[48px] font-bold">WAN 2.2 Image generation</h3>

                        <span className="flex justify-between">
                            <p className="w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam deserunt quia hic neque ullam odit quidem molestias quod quas!</p>
                            <button className="bg-white border border-white text-black font-bold rounded-[30px] px-[25px] cursor-pointer">Try WAN 2.2</button>
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-center relative text-white">
                    <img className="w-[100%] brightness-[40%] rounded-[30px]" src="https://i.ytimg.com/vi/CaPWUZI60BY/maxresdefault.jpg" alt="image"/>
                    
                    <h1 className="absolute top-[25%] text-[100px] font-extrabold">Open Source</h1>
                    <div className="absolute bottom-[0] left-[0] mx-[40px] mb-[40px]">
                        <h3 className="text-[48px] font-bold">FLUX.1 Krea</h3>

                        <span className="flex justify-between">
                            <p className="w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam deserunt quia hic neque ullam odit quidem molestias quod quas!</p>
                            <button className="bg-white border border-white text-black font-bold rounded-[30px] px-[25px] cursor-pointer">Try WAN 2.2</button>
                        </span>
                    </div>
                </div>
            </div>

            {/* Slider Nav */}
            <nav className="flex justify-end gap-150 mt-[5px] mr-[70px]">
                    <span className="flex">
                        <img src="https://img.icons8.com/?size=11&id=57567&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                        <img src="https://img.icons8.com/?size=11&id=57306&format=png&color=000000" alt="icon" className="w-[20px] h-[20px]"/>
                    </span>
                    <span className="flex gap-4 font-bold text-black">
                        <span className="bg-neutral-200 px-[7px] rounded-[50%] cursor-pointer">&lt;</span>
                        <span className="bg-neutral-200 px-[7px] rounded-[50%] cursor-pointer">&gt;</span>
                    </span>
            </nav>
        </section>
    )
}
export default Hero;