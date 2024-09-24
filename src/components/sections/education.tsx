import Container from "@/components/ui/container";
import CursCard from "../card/curs";
import { RightIcons } from "../icon";
import Link from "next/link";
import SwiperWithScrollIcons from "../ui/swiper";

export default function EducationSections() {
    return (
        <div className="py-[88px] bg-[#F5F5F5]">
            <Container  >
                <Link href={'/training-videos'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Обучение и видео <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                </SwiperWithScrollIcons>
            </Container>  
        </div>
    );
}
  