"use client"
import Container from '../ui/container'
import { SocketIcons } from '../icon'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function ResourcesById({articles}:any) {
  const { i18n } = useTranslation()
  const [file, setFile] = useState([])
  useEffect(() => {
    if (articles?.type == "file") {
      setFile(articles?.files)
    }
  },[articles?.files])
  return (
    <Container className='py-[120px] md:py-[160px]'>
        <div className="w-full cursor-pointer flex items-end  justify-between bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] p-10 rounded-lg mb-12">
         <div>
          <p className=" text-[24px] font-semibold leading-[29.05px] mb-3"dangerouslySetInnerHTML={{__html:articles?.title[i18n.language]}}/>
          <div className="flex items-center gap-2">
            <p className="text-sm font-normal leading-6 text-left flex items-center gap-2" >{dayjs(articles?.created_at).format('YYYY.MM.DD')}<span className="bg-black w-[6px] h-[6px] rounded-full"></span> </p>
            <p className="text-[14px] font-medium leading-[24px]"dangerouslySetInnerHTML={{__html:articles?.author[i18n.language]}}/>
          </div>
         </div>
        <SocketIcons/>
      </div>
     
      {articles?.type == "file" ? file?.map((e:any, i:any)=>(
            <iframe
            src={e}
            style={{ width: '100%', height: '100vh' }}
    />
      )):
      <p className="text-[14px] font-medium leading-[24px]"dangerouslySetInnerHTML={{__html:articles?.content[i18n.language]}}/>
      }
    </Container>
  )
}
