import Container from "@/components/ui/container";
import Image from "next/image";
import img1 from '@/public/content.png'
import img2 from '@/public/iPhone.png'

export default function HeroSections() {
    return (
            <div className='flex items-center justify-between ContainerLeft'>
                <div className="w-full max-w-[492px]">
                        <h2 className="text-4xl font-semibold leading-[50px] text-left">
                            Министерство юстиции
                            Республики Узбекистан
                        </h2>
                        <p className="mb-6 text-base font-normal leading-7 text-left">Последовательное осуществление единой государственной политики в сфере нормотворчества и правоприменительной практики</p>
                        <button className="inline-block bg-[#13399A] rounded-xl px-[22px] py-[11px]  text-white text-base font-semibold leading-7 text-left">
                        Регистрация 
                        </button>
                </div>
                <div className="relative ">
                <Image  className= " absolute top-[116px] left-[-125px] max-h-[421px]" src={img2} width={206} height={421} alt="img"/>
                <Image   src={img1} width={560} height={512} alt="img"/>
                </div>
                </div>
    );
  }
  