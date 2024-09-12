import Image from "next/image";
import img1 from '@/public/Frame270989841.png'
import { DateIcons } from "../icon";
export default function NewsCard({image,title,date,className}:any) {
    return (
    <div className={`w-full ${className && className}`} >
        <Image className="w-full object-contain rounded-xl aspect-w-[1.37] aspect-h-[1] " alt="img"  src={img1} width={246} height={180}/>

        <h3 className="text-base font-semibold leading-6 text-left mt-3 mb-1">
            {title}
        </h3>
        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]" >{date}</p>
    </div>
    );
  }
  