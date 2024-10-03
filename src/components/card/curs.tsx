import Image from "next/image";
import img1 from '@/public/Frame270989841.png'
import { DateIcons } from "../icon";
import Link from "next/link";
import dayjs from "dayjs"

export default function CursCard({navlink='/',image,title,date,end_date,
start_date,className}:any) {
    return (
    <Link href={navlink} className={`group w-full p-3 inline-block rounded-xl bg-white dark:bg-[#00193B] ${className && className}`} >
        {image && <Image className="w-full h-[180px]  object-cover rounded-xl aspect-w-[1.37] aspect-h-[1] " alt="img"  src={image} width={246} height={180}/>}

        <h3 className="group-hover:text-[#13399A] whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-10 hover:">
            {title}
        </h3>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-1" > <DateIcons />
                <span>start date </span>
                {start_date?.slice(0, 16)}
            </p>
            
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-1" > <DateIcons />
            <span>end date </span>
                {end_date?.slice(0, 16)}
            </p>    
    </Link>
    );
  }
  