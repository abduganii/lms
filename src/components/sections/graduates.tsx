import Container from "@/components/ui/container";
import NewsCard from "../card/news";
import Link from "next/link";
import { RightIcons } from "../icon";
import GraduatesCard from "../card/graduates";
import SwiperWithScrollIcons from "../ui/swiper";


export default function GraduatesSections() {
    return (
            <Container  className='my-[120px]' >
                <Link href={'/graduates'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Выпускники <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                    <GraduatesCard    title='Усмонов Алишер' text='Co-Founder of BR Company'/>
                    <GraduatesCard   title='Усмонов Алишер' text='Co-Founder of BR Company'/>
                    <GraduatesCard   title='Усмонов Алишер' text='Co-Founder of BR Company'/>
                    <GraduatesCard   title='Усмонов Алишер' text='Co-Founder of BR Company'/>
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  