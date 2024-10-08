import imag from "@/public/image.png"
import Image from "next/image"
import Container from "../ui/container"
import { ClouckIcons, StudentIcons, StudyIcons } from "../icon"
export default function AboutUsPage() {
  return (
    <div className='pt-[96px]'>
        <div className={`md:py-[60px] lg:py-[140px] md:px-[74px] relative  md:flex justify-end bg-contain bg-center aspect-[2.5/1]`} >
            <Image src={imag} width={1440} height={560} alt="img" className="w-full aspect-[2.57/1] object-contain top-0 left-0  md:absolute"/>
            <div className='w-full max-w-[340px] md:max-w-[478px] md:text-white mx-4 mt-[38px] md:mx-0 md:mt-0 z-10'>
                <h3 className='text-[32px]  font-semibold leading-[38.73px]  mb-2'>Статья «О нас»</h3>
                <p className='text-[16px]  font-normal leading-[26px] '>По инициативе Главы государства Шавката Мирзиёева органы юстиции преобразованы в более народную структуру, ответственную за решение правовых вопросов граждан непосредственно на местах, в махаллях.
                Во-первых, органы юстиции будут принимать практические меры по выявлению и анализу правовых проблем, возникающих в повседневной жизни населения, а также разрабатывать проекты актов законодательства, направленные на их устранение
                </p>
            </div>
        </div>  
        <Container className='my-[64px] md:my-[120px]'>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <StudyIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871]">Курсы</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <StudentIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871]">Курсы</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <ClouckIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871]">Курсы</p>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl font-semibold leading-[38.73px] text-left mt-[64px] md:mt-[120px]">Преимущества</h3>
            <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8 ">
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md ">
                    <div className="w-[64px] h-[64px] bg-white"> </div>
                    <h4 className="mt-6 mb-1 text-[20px] font-semibold leading-[28px] ">Title</h4>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md ">
                    <div className="w-[64px] h-[64px] bg-white"> </div>
                    <h4 className="mt-6 mb-1 text-[20px] font-semibold leading-[28px] ">Title</h4>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md ">
                    <div className="w-[64px] h-[64px] bg-white"> </div>
                    <h4 className="mt-6 mb-1 text-[20px] font-semibold leading-[28px] ">Title</h4>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                    <p className="mb-4 text-[14px] font-normal leading-[24px] text-[#5B6871] list-decimal">Subtitle information</p>
                </div>
            </div>
          </Container>
         
    </div>
  )
}
