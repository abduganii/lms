import Container from "@/components/ui/container";
import Link from "next/link";
import { RightIcons } from "../icon";
import SwiperWithScrollIcons from "../ui/swiper";
import dayjs from "dayjs";


export default function ArticlesSections({articles}:any) {
    return (
            <Container  className='my-[120px]' >
                <Link href={'/resources'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Статьи <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={2} className="flex items-center gap-6 mt-8 ">
                    {
                        articles?.length && articles.map((e:any)=>(
                            <Link href={`/resources/${e?.id}`} key={e?.id} className="group w-full inline-block bg-[#F1F1F1] dark:bg-[#001E45] rounded p-4">
                                <h3 className="group-hover:text-[#13399A] pb-4 text-base font-semibold leading-6 text-left mb-2" dangerouslySetInnerHTML={{__html:e?.title}}/>
                                <p className="text-sm font-normal leading-6 text-left">{dayjs(e?.created_at).format('YYYY.MM.DD')}</p>
                            </Link>
                        ))
                    }
                  
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  