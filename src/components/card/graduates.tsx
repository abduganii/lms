import Image from "next/image";
import img1 from '@/public/Frame270989867.png'
import { DateIcons } from "../icon";
import Link from "next/link";
export default function GraduatesCard({ image,title,text,className}:any) {
    return (
    <div className={`group w-full ${className && className}`} >
        <Image className="w-full object-contain rounded-xl" alt="img"  src={img1} width={270} height={208}/>

        <div className="group-hover:text-[#13399A] text-base font-semibold leading-6 text-left mt-3 mb-1">
            {title}
        </div>
        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]" >{text}</p>
    </div>
    );
  }
  