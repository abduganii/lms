import Container from "@/components/ui/container";
import NewsCard from "../card/news";
import Link from "next/link";
import { RightIcons } from "../icon";
import SwiperWithScrollIcons from "../ui/swiper";


export default function NewsSections() {
    return (
            <Container  className='my-[120px]' >
                <Link href={'/news'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Новости <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                    <NewsCard  navlink={`/news/${1}`}  title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                    <NewsCard navlink={`/news/${1}`}  title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                    <NewsCard  navlink={`/news/${1}`} title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                    <NewsCard  navlink={`/news/${1}`} title='В Управлении юстиции города Ташкента состоялся выездной прием по изучению...' date='16.12.12'/>
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  