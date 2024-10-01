import Container from "@/components/ui/container";
import Image from "next/image";
import CursCard from "../card/curs";
import { RightIcons } from "../icon";
import Link from "next/link";
import SwiperWithScrollIcons from "../ui/swiper";

export default function CursSections({courses}:any) {
    return (
        <div className="py-[88px] bg-[#F5F5F5] dark:bg-[#001E45]">
            <Container  >
                <Link href={'/curs'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Курсы <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={4} className="flex  gap-6 mt-8 ">
                    {
                        courses?.length && courses?.map((e:any)=>(
                            <CursCard image={e?.img} key={e?.id} navlink={`/curs/${e?.id}`} title={e?.name} date={e?.created_at}/>
                        ))
                    }
                   
                </SwiperWithScrollIcons>
            </Container>  
        </div>
        );
  }
  