import { Cards } from "@/components/Cards";
import { Features } from "@/components/Features";
import { HeroPage } from "@/components/HeroPage";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
    return (
        <div>
            <HeroPage />
            <div className="bg-[#FFF9E9] border-2 border-[#1C423C]">
                <Steps />
                <Features />
            </div>
            <Cards />
            <Testimonials />
        </div>
    )
}