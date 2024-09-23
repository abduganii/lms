import Container from "@/components/ui/container";
import Link from "next/link";
import { RightIcons } from "../icon";
import SwiperWithScrollIcons from "../ui/swiper";


export default function ArticlesSections() {
    return (
            <Container  className='my-[120px]' >
                <Link href={'/news'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">Статьи <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={2} className="flex items-center gap-6 mt-8 ">
                    <div className="w-full bg-[#F1F1F1] rounded p-4">
                        <h3 className="pb-4 text-base font-semibold leading-6 text-left mb-2">
                            В Управлении юстиции города Ташкента состоялся выездной прием по изучению
                        </h3>  
                        <p className="text-sm font-normal leading-6 text-left">16.07.2024</p>
                    </div>
                    <div className="w-full bg-[#F1F1F1] rounded p-4">
                        <h3 className="pb-4 text-base font-semibold leading-6 text-left mb-2">
                            В Управлении юстиции города Ташкента состоялся выездной прием по изучению
                        </h3>  
                        <p className="text-sm font-normal leading-6 text-left">16.07.2024</p>
                    </div>
                    <div className="w-full bg-[#F1F1F1] rounded p-4">
                        <h3 className="pb-4 text-base font-semibold leading-6 text-left mb-2">
                            В Управлении юстиции города Ташкента состоялся выездной прием по изучению
                        </h3>  
                        <p className="text-sm font-normal leading-6 text-left">16.07.2024</p>
                    </div>
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  