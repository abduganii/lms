"use client"
import Container from '../ui/container'
import { SocketIcons } from '../icon'

export default function ResourcesById() {
  return (
    <Container className='py-[120px] md:py-[160px]'>
        <div className="w-full cursor-pointer flex items-end  justify-between bg-[#F5F5F5] p-10 rounded-lg mb-12">
         <div>
          <p className=" text-[24px] font-semibold leading-[29.05px] mb-3">Список международных меморандумов и соглашений Академии Генеральной прокуратуры Республики Узбекистан</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" >17.08.2024 <span className="bg-black w-[6px] h-[6px] rounded-full"></span> </p>
            <p className="text-[14px] font-medium leading-[24px]">А. Хусановs</p>
          </div>
         </div>
        <SocketIcons/>
      </div>
       <iframe
        src="https://pdfobject.com/pdf/sample.pdf"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </Container>
  )
}
