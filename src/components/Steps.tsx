
export const Steps = () => {
    return (
        <section className="py-20">
            <div className="flex justify-center items-center flex-col my-20">
                <h1 className="text-5xl text-[#1C423C] font-bold mx-auto lg:mx-20 2xl:mx-60">LOREM IPSUM DOLOR SIZT AMET</h1>
                <p className="text-xl text-[#1C423C] text-center font-semibold mx-auto lg:mx-40 2xl:mx-60 my-4">Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 relative">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative">
                    <div className="bg-[#FBEEAF] text-[#1C423C] rounded-full border border-black/25 w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">
                        1
                    </div>
                    <h3 className="text-2xl text-[#1C423C] font-bold mb-2">Integer tincidunt</h3>
                    <p className="text-lg text-[#1C423C] max-w-xs">
                        Vivamus elementum semper nisi. Aenean vulputate eleifend tellus
                    </p>
                </div>

                <div className="hidden lg:block w-32 border-t border-dashed border-[#1C423C] absolute left-1/4 top-1/4 mr-12"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative">
                    <div className="bg-[#FBEEAF] text-[#1C423C] rounded-full  border border-black/25 w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">
                        2
                    </div>
                    <h3 className="text-2xl text-[#1C423C] font-bold mb-2">Cras dapibuys</h3>
                    <p className="text-lg text-[#1C423C] max-w-xs">
                        Donec vitae sapien ut libero venenatis faucibus
                    </p>
                </div>

                <div className="hidden lg:block w-32 h-1 border-t border-dashed border-[#1C423C] absolute right-1/4 top-1/4 z-0"></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative">
                    <div className="bg-[#FBEEAF] text-[#1C423C] rounded-full border border-black/25 w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">
                        3
                    </div>
                    <h3 className="text-2xl text-[#1C423C] font-bold mb-2">Quisque rutrum</h3>
                    <p className="text-lg text-[#1C423C] max-w-xs">
                    Aenean leo ligula, Etiam ultricies nisi vel augue
                    </p>
                </div>
            </div>
        </section>
    );
};
