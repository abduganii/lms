"use client"
import Container from "@/components/ui/container";
import Link from "next/link";
import { RightIcons } from "../icon";
import GraduatesCard from "../card/graduates";
import SwiperWithScrollIcons from "../ui/swiper";
import { useTranslation } from "react-i18next";

interface Graduatedinterface {
    graduated: any[]
  }

export default function GraduatesSections({graduated}:Graduatedinterface) {
    const {t,i18n} = useTranslation()
    return (
            <Container  className='my-[120px]' >
                <Link href={'/graduates'} className="flex items-center text-4xl font-semibold leading-[38.73px] text-left">{t('graduates')} <RightIcons/> </Link>
                <SwiperWithScrollIcons slidesPerView={3} className="flex items-center gap-6 mt-8 ">
                  {
                      graduated && graduated?.map(e=>(
                        <GraduatesCard key={e?.id}  image={e?.photo}  title={`${e?.first_name} ${e?.last_name}`} text={e?.position?.[i18n.language]}/>

                      ))
                  }
                </SwiperWithScrollIcons>
            </Container>  
        );
  }
  