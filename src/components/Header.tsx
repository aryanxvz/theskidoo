
"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed z-50 w-full px-4 sm:px-16 transition-colors duration-300 ${
                scrolled ? "bg-[#FBEEAF] bg-opacity-75 shadow-md backdrop-blur-[0.5rem]" : "bg-transparent"
            }`}>

            <div className="flex justify-between items-center p-2">
                <div className="hidden lg:block">
                    <div className="flex gap-8">
                        <div className="text-lg text-[#1C423C] font-medium hover:scale-105 transition cursor-pointer">Process</div>
                        <div className="text-lg text-[#1C423C] font-medium hover:scale-105 transition mr-16 cursor-pointer">Benefits</div>
                    </div>
                </div>
                

                {/* logo/header/title */}
                <h1 className="text-2xl lg:text-3xl text-[#1C423C] hover:scale-105 transition font-bold cursor-pointer">
                    <Link href="/">
                        THESKIDOO
                    </Link>
                </h1>

                {/* social icons */}
                <div className="flex gap-2">
                    {/* buttom */}
                    <div className="flex items-center gap-2 lg:gap-4">
                        <button className="text-sm lg:text-base text-white bg-[#1C423C] border border-[#1C423C] hover:scale-105 font-medium rounded-full px-3 lg:px-4 py-1 lg:py-[.25em] transition-all">
                            Sign in
                        </button>
                        <button className="text-sm lg:text-base text-[#1C423C] bg-[#FBEEAF] border border-[#1C423C] hover:scale-105 font-medium rounded-full px-3 lg:px-4 py-1 lg:py-[.25em] transition-all">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
