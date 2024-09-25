import Image from "next/image";
import img1 from '@/public/Frame270989841.png'
import { DateIcons } from "../icon";
import Link from "next/link";

export default function CursCard({navlink='/',image,title,date,className}:any) {
    return (
    <Link href={navlink} className={`group w-full p-3 inline-block rounded-xl bg-white ${className && className}`} >
        <Image className="w-full  object-contain rounded-xl aspect-w-[1.37] aspect-h-[1] " alt="img"  src={img1} width={246} height={180}/>

        <h3 className="group-hover:text-[#13399A] text-base font-semibold leading-6 text-left mt-3 mb-10 hover:">
            {title}
        </h3>
        <p className="text-sm font-normal leading-6 text-left flex items-center" ><DateIcons/> {date}</p>
    </Link>
    );
  }
  