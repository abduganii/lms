import Image from "next/image";
import Container from "../ui/container";
import img from "@/public/Frame270989841.png"
import { BlockIcons, PlayIcons } from "../icon";

export default function ResourcesPage() {
  return (
    <Container className='pt-[160px] pb-[104px]'>
        <div className="w-full flex items-center gap-10 bg-[#F5F5F5] p-10  mb-12 rounded-md">
            <div className='w-full max-w-[568px]'>
                <h3 className=" text-[36px] font-semibold leading-[48px]">Historical Perspectives on Justice</h3>
                <p className="mt-5 mb-4 text-[#5B6871] text-[14px] font-normal leading-[24px]">Unveil the complexities of justice with this comprehensive course. We ll delve into the fundamental principles of fairness, equality, and
                    the rule of law, examining how these concepts translate to real world situations.
                    Through engaging lectures and discussions, you ll gain a strong foundation in various philosophical perspectives on justice. We ll explore
                    the structures of legal systems and analyze contemporary issues where the pursuit of justice faces challenges.
                </p>
                <p className="text-sm font-normal mb-4 leading-6 text-left flex items-center text-[#5B6871]" >03:54:31</p>
                <button className="inline-block bg-[#13399A] rounded-xl px-[22px] py-[11px]  text-white text-base font-semibold leading-7 text-left">
                        Регистрация 
                </button>
            </div>
            <Image src={img} alt="img" width={464} height={384} className="w-full max-w-[464px]"/> 
        </div>  
        <h3 className="mb-6 text-[28px] font-semibold leading-[36px]">Материалы курса</h3> 
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <PlayIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">Legal Systems and Processes</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div>  
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <BlockIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">Justice and Social Issues</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div> 
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <BlockIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">Justice and Technology</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div> 
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <BlockIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">The Pursuit of Justice in Action</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div> 
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <BlockIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">Historical Perspectives on Justice</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div> 
        <div className="w-full flex items-center bg-[#F5F5F5] p-6 rounded-md gap-4 mb-4">
            <BlockIcons/>
            <p className="text-[16px] font-medium leading-[26px] ">The Role of Media in Justice</p>
            <p className="text-sm font-normal leading-6 text-left ml-auto flex items-center text-[#5B6871]" >03:54:31</p>
        </div> 
    </Container>
  )
}
