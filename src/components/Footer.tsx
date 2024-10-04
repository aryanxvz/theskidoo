
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons"

export const Footer = () => {
    return (
        <footer className="bg-[#FBEEAF] border-t-2 border-t-[#1C423C]">
            <div className="container px-6 pt-16 lg:pt-20 pb-8 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-y-10">

                    <div>
                        <h1 className="max-w-lg text-2xl font-semibold tracking-tight text-[#1C423C] xl:text-4xl">
                            About the blog
                        </h1>
                        <div className="text-[#1C423C] text-base lg:text-lg pt-2">
                            We’re dedicated to sharing enchanting tales from our globe-trotting adventures, bringing you authentic experiences, hidden gems, and practical travel tips.
                        </div>
                    

                        <div className="flex justify-start mt-2 lg:mt-4">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h1 className="max-w-lg text-2xl font-semibold tracking-tight text-[#1C423C] xl:text-4xl">
                            Newsletter
                        </h1>
                        <div className="text-[#1C423C] text-base lg:text-lg pt-2">
                            Subscribe now to fuel your wanderlust, and join our community of passionate explorers. Don’t miss out, your next adventure awaits!
                        </div>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="md:w-9/12 px-4 py-2 text-[#1C423C] bg-white rounded-md border-2 border-[#1C423C]/70 focus:border-[#1C423C] focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#1C423C]" placeholder="Email Address"/>
                    
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white hover:text-white transition-all duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#1C423C] rounded-lg hover:bg-gray-800 hover:scale-105 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                <hr className="my-6 border-[#1C423C] md:mt-12"/>
                
                <div className="flex items-center justify-center">
                    <div>
                        <div className="w-full mx-auto max-w-screen-xl pt-2 md:flex md:items-center md:justify-between">
                            <span className="text-sm sm:text-center text-[#1C423C]">©2024 <a href="" className="hover:underline">TripMyWay</a>. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 