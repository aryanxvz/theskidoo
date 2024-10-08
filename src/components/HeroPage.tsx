
import { BsArrowRight } from "react-icons/bs"

export const HeroPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center bg-[#FBEEAF] text-[#1C423C] pt-32 2xl:pt-40">

                <h3 className="text-lg font-semibold mx-16">
                    LOREM IPSUM DOLOR SIT AMET.
                </h3>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mx-auto lg:mx-20 2xl:mx-60 my-10">
                    CONSECTETUR ELIT SED, DICTUM AT RINCIDUNT SIT AMET.
                </h1>
                <div className="text-lg font-medium">
                    <h6>
                        sed do eiusmod tempor incididunt ut labore.
                    </h6>
                    <h6 className="mx-10">
                    Ut enim ad minim veniam, quis nostrud exercitation.
                    </h6>
                </div>

                <div>
                    <button className="flex justify-center items-center gap-1 text-2xl font-bold px-6 py-3 lg:px-8 lg:py-4 bg-[#FDCE00] border-[#1C423C] border-2 rounded-2xl shadow-[5px_5px_0px_0px_#1C423C] my-12 group hover:scale-110 transition-all">
                        GET STARTED <BsArrowRight className="group-hover:translate-x-1.5 transition" />
                    </button>
                </div>

                <div className="bg-gray-50 text-2xl font-semibold border-2 border-[#1C423C] rounded-full my-12 py-4 px-8 2xl:px-12">
                    Maecenas odio ante tincidunt tempus. Donec vitae sapien libero venenatis faucibus. Etiam sit eget eros.
                </div>
            </div>
        </div>
    )
}