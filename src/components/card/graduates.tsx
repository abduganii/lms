import Image from "next/image";
import img1 from '@/public/Frame270989867.png'
import { DateIcons } from "../icon";
export default function GraduatesCard({ image,title,text,className}:any) {
    return (
    <div className={`group w-full ${className && className}`} >
        {image &&<Image title={image} className="w-full h-[208px] object-cover rounded-xl" alt="img"  src={image} width={270} height={208}/>}

        <div className="group-hover:text-[#13399A]  whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-1  line-clamp-3" dangerouslySetInnerHTML={{__html:title}}/>
        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]" dangerouslySetInnerHTML={{__html:text}}/>
    </div>
    );
  }
  