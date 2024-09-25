import Container from "@/components/ui/container";
import Image from "next/image";
import CursCard from "../card/curs";
import { RightIcons } from "../icon";
import Link from "next/link";
import SwiperWithScrollIcons from "../ui/swiper";


export default function CursSections() {
    return (
        <div className="py-[88px] bg-[#F5F5F5]">
            <Container  >
                <Link href={'/curs'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Курсы <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={4} className="flex items-center gap-6 mt-8 ">
                    <CursCard navlink={'/curs/1'} title="title" date='14 авг, 2024'/>
                    <CursCard navlink={'/curs/1'} title="title" date='14 авг, 2024'/>
                    <CursCard navlink={'/curs/1'} title="title" date='14 авг, 2024'/>
                    <CursCard navlink={'/curs/1'} title="title" date='14 авг, 2024'/>
                    <CursCard navlink={'/curs/1'} title="title" date='14 авг, 2024'/>
                </SwiperWithScrollIcons>
            </Container>  
        </div>
        );
  }
  