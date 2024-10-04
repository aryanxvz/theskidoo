
"use client"
import { useState, useEffect } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 250) {
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
                scrolled ? "bg-[#FBEEAF] bg-opacity-90 shadow-lg backdrop-blur-[0.5rem]" : "bg-transparent"
            }`}>

            <div className="flex justify-between items-center p-2">
                <div className="flex gap-8">
                    <div className="text-lg text-[#1C423C] font-medium">how it works</div>
                    <div className="text-lg text-[#1C423C] font-medium">benefits</div>
                </div>
                

                {/* logo/header/title */}
                <h1 className="text-4xl text-[#1C423C] font-bold">
                    theskidoo
                </h1>

                {/* social icons */}
                <div className="flex gap-2">
                    {/* buttom */}
                    <div className="flex items-center">
                        <button className="text-base text-white bg-[#1C423C] font-medium rounded-full px-4 py-1.5">sign up</button>
                    </div>
                    <div className="flex gap-0">
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </header>
    );
}