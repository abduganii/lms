
"use client"
import { useTranslation } from "react-i18next";
import imag from "@/public/image.png"
import imag1 from "@/public/1.jpg"
import imag2 from "@/public/2.jpg"
import imag3 from "@/public/3.jpg"
import Image from "next/image"
import Container from "../ui/container"
import { ClouckIcons, StudentIcons, StudyIcons } from "../icon"
export default function AboutUsPage() {
      const {t} = useTranslation()

  return (
    <div className='pt-[96px]'>
        <div className={`md:py-[60px] lg:py-[140px] md:px-[74px] relative  md:flex justify-end bg-contain bg-center aspect-[2.5/1]`} >
            <Image  src={imag}    width={1440} height={560} alt="img" className="w-full aspect-[2.57/1] object-contain top-0 left-0  md:absolute"/>
            <div className='w-full max-w-[340px] md:max-w-[478px] md:text-white mx-4 mt-[38px] md:mx-0 md:mt-0 z-10'>
                  <h3 className='text-[32px]  font-semibold leading-[38.73px]  mb-2'>{ t('about-us_title')}</h3>
                  <p className='text-[16px]  font-normal leading-[26px] '>{t('about-us_text')}
                </p>
            </div>
        </div>  
        <Container className='my-[64px] md:my-[120px]'>
            <div className="flex flex-wrap md:flex-nowrap gap-6">
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <StudyIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871] dark:text-white">{ t('curstext1')}</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <StudentIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871] dark:text-white">{ t('curstext2')}</p>
                    </div>
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md flex items-center gap-4">
                    <ClouckIcons/>
                    <div>
                        <h4 className="text-[20px] font-semibold leading-[28px] ">25+</h4>
                        <p className=" text-[14px] font-normal leading-[24px] text-[#5B6871] dark:text-white">{ t('curstext3')}</p>
                    </div>
                </div>
            </div>
              <h3 className="text-4xl font-semibold leading-[38.73px] text-left mt-[64px] md:mt-[120px]">{ t('advantages')}</h3>
            <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8 ">
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md  text-center">
                <Image src={imag1} width={200} height={200} alt="img" className="w-full  m-auto  max-w-[200px]  object-contain"/>
                    <h4 className="mt-6 mb-1   text-start text-[20px] font-semibold leading-[28px] ">{ t('advantagestitle')}</h4>
                    <p className="mb-4 text-[14px] font-normal   text-start leading-[24px] text-[#5B6871] dark:text-white list-decimal">{ t('advantagestext')}</p>
                    
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md   text-center ">
                     
                    <Image src={imag2} width={200} height={200} alt="img" className="w-full  m-auto  max-w-[200px]  object-contain"/>
                    <h4 className="mt-6 mb-1   text-start text-[20px] font-semibold leading-[28px] ">{ t('advantagestitle1')}</h4>
                    <p className="mb-4 text-[14px] font-normal   text-start leading-[24px] text-[#5B6871] dark:text-white list-decimal">{ t('advantagestext1')}</p>
           
                </div>
                <div className="w-full bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-6 rounded-md  text-center">
                <Image src={imag3} width={200} height={200} alt="img" className="w-full m-auto max-w-[200px]  object-contain"/>
                    <h4 className="mt-6 mb-1   text-start text-[20px] font-semibold leading-[28px] ">{ t('advantagestitle2')}</h4>
                    <p className="mb-4 text-[14px] font-normal   text-start leading-[24px] text-[#5B6871] dark:text-white list-decimal">{ t('advantagestext2')}</p>
                </div>
            </div>
          </Container>
         
    </div>
  )
}
