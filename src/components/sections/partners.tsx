"use client"
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/container";
import Image from "next/image";
import SwiperWithScrollIcons from "../ui/swiper";

export default function PartnersSections({ partners }: any) {
    const {t} = useTranslation()
    return (
        <Container className='mb-[120px]' >
            <h3 className="text-2xl font-semibold leading-[29.05px] text-center">{t('partners')}</h3>
                
            <SwiperWithScrollIcons slidesPerView={6} slidesPerViewRes={2} className="flex items-center gap-6 mt-6 ">
                {
                    partners?.length && partners?.map((e:any)=>(
                        <Image
                            className="w-[150px] sm:w-[211px] h-[72px] object-cover"
                            key={e?.id}
                            src={e?.photo}
                            width={211}
                            height={72}
                            alt="img"
                        />
                    ))
                }
            </SwiperWithScrollIcons>
        </Container>  
    );
  }
  