import Container from "@/components/ui/container";
import NewsCard from "../card/news";
import Link from "next/link";
import { RightIcons } from "../icon";
import SwiperWithScrollIcons from "../ui/swiper";

export default function PagesSections({pages}:any) {
    return (
            <Container  className='my-[120px]' >
                <Link href={'/page'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Страницы <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                    {
                        pages?.length && pages?.map((e:any)=>(
                            <NewsCard image={e?.image} key={e?.id} disc={e?.short_description} navlink={`/page/${e?.slug}`} 
                             title={e?.name} date={e?.created_at}/>
                        ))
                }
                
                
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  