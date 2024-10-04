
import { BsArrowRight } from "react-icons/bs"

export const HeroPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center bg-[#FBEEAF] text-[#1C423C] pt-32 2xl:pt-40">

                <h3 className="text-lg font-semibold">
                    PURE DEVJUICE - NO ADDITIVES, JUST EXCELLENCE
                </h3>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mx-10 lg:mx-20 2xl:mx-60 my-10">
                    QUENCH YOUR DEVELOPMEMNT THIRST WITH DEVJUICE.
                </h1>
                <div className="text-lg font-medium">
                    <h6>
                        Monthly access, weekly &apos;spritz&apos;.
                    </h6>
                    <h6>
                        No requirement headaches, only pure results.
                    </h6>
                </div>

                <div>
                    <button className="flex justify-center items-center gap-1 text-2xl font-bold px-6 py-3 lg:px-8 lg:py-4 bg-[#FDCE00] border-[#1C423C] border-2 rounded-2xl shadow-[5px_5px_0px_0px_#1C423C] my-10 group hover:scale-110 transition-all">
                        GET STARTED <BsArrowRight className="group-hover:translate-x-1.5 transition" />
                    </button>
                </div>

            </div>
        </div>
    )
}