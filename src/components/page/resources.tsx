import Link from "next/link";
import { DownIcons , RightIcons2 } from "../icon";
import Container from "../ui/container";

export default function ResourcesPage() {
  return (
    <Container  className='py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left mb-4">Источники</h3>
      <div className="flex gap-3 mb-8">
        <div className="w-full cursor-pointer flex items-center justify-between max-w-[220px] bg-[#F5F5F5] py-3 px-5 rounded-md">
          <p className="text-[14px] font-medium leading-[24px]">Все темы</p>
          <DownIcons/>
        </div>
        <div className="w-full cursor-pointer flex items-center justify-between max-w-[220px] bg-[#F5F5F5] py-3 px-5 rounded-md">
          <p className="text-[14px] font-medium leading-[24px]">Дата</p>
          <DownIcons/>
        </div>
        <div className="w-full cursor-pointer flex items-center justify-between max-w-[220px] bg-[#F5F5F5] py-3 px-5 rounded-md">
          <p className="text-[14px] font-medium leading-[24px]">По органу</p>
          <DownIcons/>
        </div>
        <div className="w-full cursor-pointer flex items-center justify-between max-w-[220px] bg-[#F5F5F5] py-3 px-5 rounded-md">
          <p className="text-[14px] font-medium leading-[24px]">По формам</p>
          <DownIcons/>
        </div>
      </div>

      <Link href={'/resources/1'} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] p-4 rounded-lg mb-4">
         <div>
          <p className="text-[16px] font-medium leading-[26px] mb-3">Список международных меморандумов и соглашений Академии Генеральной прокуратуры Республики Узбекистан</p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-medium leading-[24px]">А. Хусановs</p>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 17.08.2024</p>
          </div>
         </div>
         <RightIcons2/> 
      </Link>
     
      <Link href={'/resources/1'} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] p-4 rounded-lg mb-4">
         <div>
          <p className="text-[16px] font-medium leading-[26px] mb-3">Список международных меморандумов и соглашений Академии Генеральной прокуратуры Республики Узбекистан</p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-medium leading-[24px]">А. Хусановs</p>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 17.08.2024</p>
          </div>
         </div>
         <RightIcons2/> 
      </Link>
      <Link href={'/resources/1'} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] p-4 rounded-lg mb-4">
         <div>
          <p className="text-[16px] font-medium leading-[26px] mb-3">Список международных меморандумов и соглашений Академии Генеральной прокуратуры Республики Узбекистан</p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-medium leading-[24px]">А. Хусановs</p>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 17.08.2024</p>
          </div>
         </div>
         <RightIcons2/> 
      </Link>
      <Link href={'/resources/1'} className="w-full cursor-pointer flex items-center  justify-between bg-[#F5F5F5] p-4 rounded-lg mb-4">
         <div>
          <p className="text-[16px] font-medium leading-[26px] mb-3">Список международных меморандумов и соглашений Академии Генеральной прокуратуры Республики Узбекистан</p>
          <div className="flex items-center gap-2">
            <p className="text-[14px] font-medium leading-[24px]">А. Хусановs</p>
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" ><span className="bg-[#D5DADD] w-[6px] h-[6px] rounded-full"></span> 17.08.2024</p>
          </div>
         </div>
         <RightIcons2/> 
      </Link>
  </Container>
  )
}
