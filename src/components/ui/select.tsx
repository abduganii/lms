import React, { useState } from 'react'
import { DownIcons } from '../icon'

export default function SelectLocal({ text, value, setValue, options, optionskey }: any) {
    const [open,setOpen] = useState(false)
  return (
    <>
       <div onClick={()=>setOpen(!open)} className="relative mt-8 w-full cursor-pointer flex items-center justify-between sm:max-w-[220px]  bg-[#F5F5F5] dark:bg-[#001E45] dark:text-[#FFFFFF] py-3 px-5 rounded-lg">
              <p className="text-[14px] font-medium leading-[24px]">{value?.[optionskey]|| text}</p>
          <DownIcons/>
         
          {
              options && open? <div className='absolute rounded-lg bg-white dark:bg-[#001E45] dark:text-[#FFFFFF] top-[60px] left-0 w-full max-w-[220px] shadow-md'>
                  {
                      options?.map((e:any) => (
                          <p
                              className='text-[14px] font-medium leading-[24px] px-3 py-1 hover:bg-[#F5F5F5] hover:dark:bg-[#00132D]' key={e?.id}
                              onClick={() => setValue(e)}>
                            {e?.[optionskey]} 
                        </p>
                    ))
                  }
              </div>:""
              }
    </div>
    </>
  )
}
