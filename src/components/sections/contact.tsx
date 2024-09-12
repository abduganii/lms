import Container from "@/components/ui/container";
import img1 from '@/public/Frame1000001344.png'
import Image from "next/image";


export default function ContactSections() {
    return (
            <Container  >
                <div className='flex items-center  bg-[#F4F6FB]  rounded-3xl overflow-hidden '>

                    <Image src={img1} width={564} height={523} alt="img"/>
                    <form className="w-full pl-[72px] pr-[46px]">
                        <h3 className="text-4xl font-semibold leading-[38.73px] text-center mb-[32px]">Связаться с нами</h3>
                        <input type="text" className="w-full px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-4" placeholder="ФИО"/> 
                        <div className="flex gap-4 mb-4">
                            <input type="text" className="w-full px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left" placeholder="Телефон"/> 
                            <input type="email" className="w-full px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left" placeholder="Почта"/> 
                        </div>
                        <input type="text" className="w-full px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-4" placeholder="Тема"/> 
                        <input type="text" className="w-full px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-12" placeholder="Описание"/>

                        <button className="p-[13px] bg-[#13399A] text-white rounded-xl w-full max-w-[240px]">Отправить</button> 
                    </form>
                </div>
            </Container>  
        );
  }
  