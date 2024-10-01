import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
export default function NewsCard({navlink='/', image,title,date,className}:any) {
    return (
    <Link href={navlink} className={`group w-full ${className && className}`} >
        {image && <Image className="w-full object-cover aspect-[1.6/1] rounded-xl aspect-w-[1.37] aspect-h-[1] " alt="img"  src={image} width={246} height={180}/>}

        <div className="group-hover:text-[#13399A]  whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-1">
            {title}
        </div>
        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]" > {dayjs(date).format('YYYY.MM.DD')}</p>
    </Link>
    );
  }
  