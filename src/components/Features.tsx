
import Image from "next/image"

export const Features = () => {
    return (
        <section className="mb-40">
            <div className="flex justify-center items-center flex-col my-20">
                <h1 className="text-5xl text-[#1C423C] font-bold mx-auto lg:mx-20 2xl:mx-60">DE FINIBUS BONORUM ET MALORUM</h1>
                <p className="text-xl text-[#1C423C] text-center font-semibold mx-auto lg:mx-40 2xl:mx-60 my-4">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
            </div>

            <div className="flex justify-center gap-8">
                <div className="group">
                    <div className="cursor-pointer bg-[#FBEEAF] text-[#1C423C] border-2 border-[#1C423C] overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:w-[22rem] transition rounded-3xl group-hover:scale-105">
                        <div className="px-6 py-6 flex flex-col h-full">
                            <h3 className="text-xl sm:text-2xl font-semibold">Finibus Bonorum et Malorum</h3>
                            <p className="text-base sm:text-lg mt-2 leading-relaxed overflow-hidden">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                        </div>
                        <Image className="absolute hidden sm:block top-40 -right-20 rounded-t-3xl shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-110 mt-12" src = "/demo.png" alt="My Projects" quality={95} width={640} height={360} />
                    </div>
                </div>

                <div className="group">
                    <div className="cursor-pointer bg-[#FBEEAF] text-[#1C423C] border-2 border-[#1C423C] overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:w-[22rem] transition rounded-3xl group-hover:scale-105">
                        <div className="px-6 py-6 flex flex-col h-full">
                            <h3 className="text-xl sm:text-2xl font-semibold">Dicta sunt explicabo</h3>
                            <p className="text-base sm:text-lg mt-2 leading-relaxed overflow-hidden">eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        <Image className="absolute hidden sm:block top-40 -right-20 rounded-t-3xl shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-110 mt-12" src = "/demo.png" alt="My Projects" quality={95} width={640} height={360} />
                    </div>
                </div>

                <div className="group">
                    <div className="cursor-pointer bg-[#FBEEAF] text-[#1C423C] border-2 border-[#1C423C] overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:w-[22rem] transition rounded-3xl group-hover:scale-105">
                        <div className="px-6 py-6 flex flex-col h-full">
                            <h3 className="text-xl sm:text-2xl font-semibold">Dignissimos ducimus</h3>
                            <p className="text-base sm:text-lg mt-2 leading-relaxed overflow-hidden">At vero eos et accusamus et iusto odio qui blanditiis deleniti atque corrupti quos dolores et quas.</p>
                        </div>
                        <Image className="absolute hidden sm:block top-40 -right-20 rounded-t-3xl shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-110 mt-12" src = "/demo.png" alt="My Projects" quality={95} width={640} height={360} />
                    </div>
                </div>
            </div>
        </section>
    )
}
