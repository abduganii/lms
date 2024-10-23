import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { VidoeIcons } from "../icon";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function NewsCard({navlink,isVideo,videoLink, image,title,date,disc,className}:any) {
    const [open,setOpen] = useState(false)
    const [embedUrl,setEmbedUrl] = useState('')
    const router = useRouter()
  console.log(disc)
    useEffect(()=>{

        if(videoLink){
            const videoId = videoLink.includes('v=') 
            ? videoLink.split('v=')[1].split('&')[0]  // Extract video ID from regular videoLink
            : videoLink.split('/').pop()?.split('?')[0]; // Extract from shortened URL, ignore query params
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}`)
        }
    },[videoLink])
    return (
    <div onClick={()=> navlink ? router.push(navlink) :"" } className={` cursor-pointer group w-full ${className && className}`} >
        {image && !open ? <div onClick={()=>{
                    console.log("ds")
                    setOpen(!open)
                    }} className="relative w-full object-cover aspect-[1.6/1] rounded-xl">
                <Image  className="w-full object-cover aspect-[1.6/1] rounded-xl" alt="img"  src={image} width={246} height={180}/>
                {isVideo && <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-white blur- pr-3 flex items-center justify-center"> <VidoeIcons/></span>}
            </div>:""}

            {
              open &&    <iframe
              width="100%"
              height="240"
              className="w-full object-cover aspect-[1.6/1] rounded-xl" 
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> 
            }

        <div className="group-hover:text-[#13399A]  whitespace-nowrap truncate text-base font-semibold leading-6 text-left mt-3 mb-1" dangerouslySetInnerHTML={{__html: title}} />
        {disc &&   <p className="text-sm font-normal leading-6 text-left  text-[#5B6871] line-clamp-3" dangerouslySetInnerHTML={{__html:disc}}/>}
        <p className="text-sm font-normal leading-6 text-left flex items-center text-[#5B6871]" > {dayjs(date).format('YYYY.MM.DD')}</p>
    </div>
    );
  }
  