import { useEffect, useState } from 'react';
import { ChatIcons } from '../icon';


export default function CustomModal() {
  return (
    <div onClick={()=>{
        if((window as any).jivo_api){
            (window as any).jivo_api.open()
        }
        }} className="fixed cursor-pointer bottom-[64px] right-[32px] rounded-full w-[40px] h-[40px] flex items-center justify-center bg-[#13399A]">
    <ChatIcons/>
    </div>
  );
}
